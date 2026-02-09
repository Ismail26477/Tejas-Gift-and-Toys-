import { useState } from "react";
import { products, type Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ScrollReveal from "./ScrollReveal";

const FeaturedProducts = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const featured = products.filter((p) => p.featured);

  return (
    <section id="products" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-primary">Our Collection</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Featured Products</h2>
            <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">Handpicked favorites loved by our customers</p>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.1}>
              <ProductCard product={p} onView={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      <ProductModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default FeaturedProducts;
