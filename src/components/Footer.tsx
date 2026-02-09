import { Heart } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-display text-xl font-bold">Tejas Gift and <span className="italic text-rose">Toys</span></h3>
            <p className="font-body text-sm text-background/70">Your premier destination for teddy bears, premium hampers & unique gifts. Spreading smiles since day one.</p>
          </div>
          <div>
            <h4 className="mb-3 font-body text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {["#home", "#about", "#products", "#gallery", "#contact"].map((h) => (
                <button key={h} onClick={() => scrollTo(h)} className="block font-body text-sm text-background/70 transition hover:text-rose">
                  {h.replace("#", "").charAt(0).toUpperCase() + h.slice(2)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-body text-sm font-bold uppercase tracking-wider">Contact</h4>
            <p className="font-body text-sm text-background/70">Phone: +91 7875452408 </p>
            <p className="font-body text-sm text-background/70">WhatsApp: +91 7875452408</p>
            <p className="mt-1 font-body text-sm text-background/70">Mon – Sat: 10 AM – 9 PM</p>
          </div>
        </div>
        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="flex items-center justify-center gap-1 font-body text-sm text-background/50">
            Made with <Heart className="h-4 w-4 text-primary" /> Tejas Gift and Toys © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
