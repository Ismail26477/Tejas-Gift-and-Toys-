import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

type Props = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, open, onClose }: Props) => {
  if (!product) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in "${product.name}" (${product.price}). Please share more details.`)}`;
  const callUrl = `tel:${PHONE_NUMBER}`;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg overflow-hidden p-0">
        <img src={product.image} alt={product.name} className="aspect-video w-full object-cover" />
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{product.name}</DialogTitle>
          </DialogHeader>
          <p className="mb-1 mt-2 font-display text-2xl font-bold text-primary">{product.price}</p>
          <p className="mb-6 font-body leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1 gap-2 rounded-full bg-green-600 hover:bg-green-700">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1 gap-2 rounded-full">
              <a href={callUrl}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
