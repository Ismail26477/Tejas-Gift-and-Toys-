import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-card/95 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <button onClick={() => scrollTo("#home")} className="font-display text-xl font-bold text-primary">
          Deepak Enterprise <span className="italic text-accent">Delumeo</span>
        </button>

        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className={`font-body text-sm font-medium uppercase tracking-wider transition hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className={scrolled ? "text-foreground" : "text-white"} /> : <Menu className={scrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-card/95 shadow-lg backdrop-blur-md md:hidden">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full px-6 py-3 text-left font-body text-sm uppercase tracking-wider text-foreground transition hover:bg-secondary hover:text-primary">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
