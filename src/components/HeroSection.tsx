import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={src} alt={`Slide ${i + 1}`} className="h-full w-full object-cover" />
        </div>
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.3em] text-white/80 md:text-base">
          Welcome to
        </p>
        <h1 className="mb-4 font-display text-4xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
          Deepak Enterprise
        </h1>
        <p className="mb-2 font-display text-2xl italic text-rose md:text-3xl">
          Delumeo
        </p>
        <p className="mb-8 max-w-xl font-body text-lg text-white/90 md:text-xl">
          Your one-stop gift shop for teddy bears, premium hampers & unique gifts
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg hover:bg-primary/90"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/50 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/40">
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/40">
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
