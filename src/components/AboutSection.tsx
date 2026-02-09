import aboutImg from "@/assets/about-shop.jpg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="bg-secondary py-20">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
      <ScrollReveal>
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img src={aboutImg} alt="Our Gift Shop" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div>
          <p className="mb-2 font-body text-sm uppercase tracking-widest text-primary">About Us</p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
            Where Every Gift Tells a Story
          </h2>
          <p className="mb-4 font-body leading-relaxed text-muted-foreground">
            Welcome to <strong className="text-foreground">Tejas Gift and Toys</strong> — your premier destination for heartfelt gifts and cuddly companions. Nestled in the heart of the city, our shop has been spreading smiles and creating memories for years.
          </p>
          <p className="mb-6 font-body leading-relaxed text-muted-foreground">
            From the softest teddy bears to elegantly curated gift hampers and one-of-a-kind unique items, we handpick every product with love and care. Whether it's a birthday, anniversary, or just because — we have the perfect gift waiting for you.
          </p>
          <div className="flex gap-8">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">500+</p>
              <p className="font-body text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">200+</p>
              <p className="font-body text-sm text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">5★</p>
              <p className="font-body text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
