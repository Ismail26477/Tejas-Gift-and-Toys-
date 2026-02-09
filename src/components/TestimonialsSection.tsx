import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Absolutely loved the teddy bear I ordered for my daughter's birthday! The quality is amazing and it was delivered so quickly. Highly recommend Deepak Enterprise!",
    rating: 5,
    tag: "Teddy Bear",
  },
  {
    name: "Rahul Patel",
    text: "Ordered a premium gift hamper for my wife's anniversary. She was thrilled! Beautiful packaging and great selection of items. Will definitely order again.",
    rating: 5,
    tag: "Gift Hamper",
  },
  {
    name: "Anita Desai",
    text: "The crystal snow globe I bought is absolutely magical. My kids love it! Great customer service too — Deepak ji was very helpful on WhatsApp.",
    rating: 5,
    tag: "Unique Gift",
  },
  {
    name: "Vikram Singh",
    text: "Best gift shop in town! I've ordered multiple times and every product has been top-notch quality. The prices are very reasonable too.",
    rating: 4,
    tag: "Regular Customer",
  },
  {
    name: "Sneha Joshi",
    text: "The candle set I purchased made a perfect housewarming gift. Elegant packaging and wonderful fragrances. Five stars!",
    rating: 5,
    tag: "Candle Set",
  },
  {
    name: "Amit Kumar",
    text: "Bought mini teddy keychains as party favors for my son's birthday. Everyone loved them! Great value for money.",
    rating: 5,
    tag: "Party Favors",
  },
];

const TestimonialsSection = () => (
  <section className="bg-secondary py-20">
    <div className="mx-auto max-w-6xl px-4">
      <ScrollReveal>
        <div className="mb-12 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">Real reviews from our happy customers</p>
        </div>
      </ScrollReveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${si < t.rating ? "fill-gold text-gold" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.tag}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
