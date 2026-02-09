import { useState } from "react";
import { products, type Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ScrollReveal from "./ScrollReveal";

const tabs = [
  { label: "All", value: "all" },
  { label: "Teddy Bears", value: "teddy" },
  { label: "Gift Items", value: "gift" },
  { label: "Unique Products", value: "unique" },
] as const;

const GallerySection = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-primary">Browse</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Product Gallery</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setFilter(t.value)}
                className={`rounded-full px-6 py-2 font-body text-sm font-medium transition-all ${
                  filter === t.value
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.05}>
              <ProductCard product={p} onView={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      <ProductModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default GallerySection;
