import type { Product } from "@/data/products";
import { Eye } from "lucide-react";

type Props = {
  product: Product;
  onView: (product: Product) => void;
};

const ProductCard = ({ product, onView }: Props) => (
  <div
    onClick={() => onView(product)}
    className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full bg-card px-5 py-2 font-body text-sm font-semibold text-foreground shadow">
          <Eye className="h-4 w-4" /> View Details
        </span>
      </div>
    </div>
    <div className="p-4 text-center">
      <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
      <p className="mt-1 font-body text-lg font-bold text-primary">{product.price}</p>
    </div>
  </div>
);

export default ProductCard;
