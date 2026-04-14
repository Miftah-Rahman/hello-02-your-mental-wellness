import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Hello-02 Logo" className="w-9 h-9 rounded-xl" />
          <span className="font-bold text-lg text-foreground">Hello-02</span>
        </div>
        <button
          onClick={scrollToDownload}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Download Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
