import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FeaturedProducts />
    <GallerySection />
    <TestimonialsSection />
    <WhyChooseUs />
    <ContactSection />
    <Footer />
    <FloatingButtons />
  </main>
);

export default Index;
