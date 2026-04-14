import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Hello-02" className="w-7 h-7 rounded-lg" />
          <span className="font-semibold text-foreground">Hello-02</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hello-02: Mental Health App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
