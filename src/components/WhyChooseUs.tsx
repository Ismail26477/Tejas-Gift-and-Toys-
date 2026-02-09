import { Gift, Star, Truck, ShieldCheck, Heart, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Star, title: "Premium Quality", desc: "Every product is handpicked for the highest quality" },
  { icon: Gift, title: "Best Prices", desc: "Competitive prices without compromising on quality" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick & safe delivery right to your doorstep" },
  { icon: ShieldCheck, title: "Secure Packaging", desc: "Gift-ready packaging that protects every item" },
  { icon: Heart, title: "Made with Love", desc: "Each gift is curated with care and attention" },
  { icon: Sparkles, title: "Unique Selection", desc: "One-of-a-kind gifts you won't find anywhere else" },
];

const WhyChooseUs = () => (
  <section className="bg-background py-20">
    <div className="mx-auto max-w-6xl px-4">
      <ScrollReveal>
        <div className="mb-12 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-widest text-primary">Why Us</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Why Choose Us</h2>
        </div>
      </ScrollReveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="group rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
