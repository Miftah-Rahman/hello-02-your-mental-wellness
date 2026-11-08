import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function prerender() {
  console.log("🚀 Starting SSR / SSG Prerendering for maximum SEO...");

  const distDir = path.resolve(rootDir, "dist");
  const templatePath = path.resolve(distDir, "index.html");
  const serverEntryPath = path.resolve(rootDir, "dist-server", "entry-server.js");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at: ${templatePath}`);
  }
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server build entry not found at: ${serverEntryPath}`);
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  const { render } = await import(serverEntryPath);

  const routes = [
    { url: "/", outPath: path.resolve(distDir, "index.html") },
    { url: "/support", outPath: path.resolve(distDir, "support", "index.html") },
  ];

  for (const route of routes) {
    const helmetContext = {};
    const { appHtml } = render(route.url, helmetContext);
    const { helmet } = helmetContext;

    const headTags = [
      helmet?.title?.toString() || "",
      helmet?.meta?.toString() || "",
      helmet?.link?.toString() || "",
      helmet?.script?.toString() || "",
    ]
      .filter(Boolean)
      .join("\n    ");

    let pageHtml = template;

    // Clean up fallback title/description if helmet provides specific ones
    if (helmet?.title?.toString()) {
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, "");
    }
    if (helmet?.meta?.toString()?.includes('name="description"')) {
      pageHtml = pageHtml.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, "");
    }

    // Inject Head Helmet Tags (meta, title, canonical, JSON-LD schemas)
    if (pageHtml.includes("<!--head-outlet-->")) {
      pageHtml = pageHtml.replace("<!--head-outlet-->", headTags);
    } else {
      pageHtml = pageHtml.replace("</head>", `    ${headTags}\n  </head>`);
    }

    // Inject SSR pre-rendered component HTML into root
    if (pageHtml.includes('<div id="root"><!--ssr-outlet--></div>')) {
      pageHtml = pageHtml.replace(
        '<div id="root"><!--ssr-outlet--></div>',
        `<div id="root">${appHtml}</div>`
      );
    } else if (pageHtml.includes('<div id="root"></div>')) {
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );
    }

    // Ensure output directory exists
    const targetDir = path.dirname(route.outPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(route.outPath, pageHtml, "utf-8");
    console.log(`  ✓ Pre-rendered: ${route.url} -> ${path.relative(rootDir, route.outPath)} (${Math.round(pageHtml.length / 1024)} KB)`);
  }

  // Cleanup temporary server build directory
  const distServerDir = path.resolve(rootDir, "dist-server");
  if (fs.existsSync(distServerDir)) {
    fs.rmSync(distServerDir, { recursive: true, force: true });
  }

  console.log("✨ SSR Prerendering complete! Full HTML, JSON-LD & meta tags generated.");
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
