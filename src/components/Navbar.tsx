import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToDownload = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#download";
    } else {
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60 transition-all">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Hello-02 Logo"
            className="w-9 h-9 rounded-xl transition-transform group-hover:scale-105 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground tracking-tight flex items-center gap-1.5">
              Hello-02
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                Wellness
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-muted/60 px-3 py-1.5 rounded-full border border-border/50">
          <Link
            to="/"
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
              location.pathname === "/"
                ? "bg-card text-foreground shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            to="/support"
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              location.pathname === "/support"
                ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-card/50"
            }`}
          >
            <span>Support</span>
          </Link>
        </div>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/support"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/15 px-3 py-2 rounded-lg transition-colors border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Need Help? Contact Us
          </Link>

          <button
            onClick={scrollToDownload}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 hover:shadow-md transition-all active:scale-95"
          >
            Download App
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            to="/support"
            className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1.5 rounded-full flex items-center gap-1"
          >
            Support
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              location.pathname === "/" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/support"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium ${
              location.pathname === "/support" ? "bg-primary text-primary-foreground font-semibold" : "text-foreground"
            }`}
          >
            <span>Support & Contact</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
              support@hello02.app
            </span>
          </Link>
          <button
            onClick={scrollToDownload}
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl font-semibold text-center mt-2 shadow-sm"
          >
            Download Hello-02 App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
