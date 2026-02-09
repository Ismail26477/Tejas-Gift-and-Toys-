import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `Hi! I'm ${name}. ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
        <ScrollReveal>
          <div>
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-primary">Get in Touch</p>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">Contact Us</h2>
            <p className="mb-8 font-body leading-relaxed text-muted-foreground">
              Have questions or want to place an order? Reach out to us via WhatsApp or give us a call — we're always happy to help!
            </p>
            <div className="space-y-5">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl bg-green-600 p-4 text-white transition hover:bg-green-700">
                <MessageCircle className="h-6 w-6" />
                <div>
                  <p className="font-body text-sm font-medium">WhatsApp</p>
                  <p className="font-body text-lg font-bold">+91 7875452408</p>
                </div>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 rounded-xl bg-primary p-4 text-primary-foreground transition hover:bg-primary/90">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="font-body text-sm font-medium">Call Us</p>
                  <p className="font-body text-lg font-bold">+91 7875452408</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-body text-sm font-medium text-muted-foreground">Address</p>
                  <p className="font-body font-semibold text-foreground">Tejas Gift and Toys, subhash nagar Viveka hospital prabhu purnima apartment shop.no.b1 
Jaitala road</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-body text-sm font-medium text-muted-foreground">Working Hours</p>
                  <p className="font-body font-semibold text-foreground">Mon – Sat: 10 AM – 9 PM</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl bg-card p-8 shadow-lg">
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">Send a Quick Inquiry</h3>
            <div className="space-y-4">
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl" />
              <Textarea placeholder="Your Message..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-xl" />
              <Button onClick={sendWhatsApp} disabled={!name || !message} className="w-full gap-2 rounded-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
