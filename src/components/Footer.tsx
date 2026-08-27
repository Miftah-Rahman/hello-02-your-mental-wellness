import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Shield, Sparkles, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-md pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Hello-02" className="w-8 h-8 rounded-xl shadow-sm" />
              <span className="font-bold text-lg text-foreground">Hello-02</span>
              <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                Mental Wellness
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Empowering Bangladesh with compassionate, stigma-free mental health care. Track moods, practice guided mindfulness, and consult clinical specialists.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <Shield className="w-4 h-4" /> 100% Confidential & Secure Space
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <a href="/#download" className="hover:text-primary transition-colors">
                  Download Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" />
              Support & Help Desk
            </h4>
            <div className="text-xs text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">Official Email:</p>
              <a
                href="mailto:support@hello02.app"
                className="text-primary font-semibold hover:underline block font-mono text-sm"
              >
                support@hello02.app
              </a>
              <p className="text-[11px] text-muted-foreground pt-1">
                Response within 12–24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hello-02 Mental Health App. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Built for mental wellness in Bangladesh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
