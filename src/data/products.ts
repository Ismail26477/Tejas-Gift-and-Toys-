import productTeddy1 from "@/assets/product-teddy-1.jpg";
import productTeddy2 from "@/assets/product-teddy-2.jpg";
import productTeddy3 from "@/assets/product-teddy-3.jpg";
import productTeddy4 from "@/assets/product-teddy-4.jpg";
import productGift1 from "@/assets/product-gift-1.jpg";
import productGift2 from "@/assets/product-gift-2.jpg";
import productUnique1 from "@/assets/product-unique-1.jpg";
import productUnique2 from "@/assets/product-unique-2.jpg";
import productUnique3 from "@/assets/product-unique-3.jpg";
import productTeddy5 from "@/assets/product-teddy-5.jpg";
import productTeddy6 from "@/assets/product-teddy-6.jpg";
import productGift3 from "@/assets/product-gift-3.jpg";
import productGift4 from "@/assets/product-gift-4.jpg";
import productUnique4 from "@/assets/product-unique-4.jpg";
import productUnique5 from "@/assets/product-unique-5.jpg";

export type Product = {
  id: string;
  name: string;
  price: string;
  category: "teddy" | "gift" | "unique";
  image: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Brown Teddy Bear",
    price: "₹499",
    category: "teddy",
    image: productTeddy1,
    description: "A lovable, soft brown teddy bear — perfect for cuddling. Made with premium plush fabric, this classic teddy is the ideal gift for all ages.",
    featured: true,
  },
  {
    id: "2",
    name: "Pink Heart Teddy",
    price: "₹599",
    category: "teddy",
    image: productTeddy2,
    description: "Adorable pink teddy bear holding a heart. Perfect for Valentine's Day, anniversaries, or to say 'I love you' in the sweetest way.",
    featured: true,
  },
  {
    id: "3",
    name: "White Bow Teddy Bear",
    price: "₹549",
    category: "teddy",
    image: productTeddy3,
    description: "Elegant white teddy bear with a satin bow tie. A premium plush companion that makes an exquisite gift for any occasion.",
    featured: true,
  },
  {
    id: "4",
    name: "Mini Teddy Keychain",
    price: "₹149",
    category: "teddy",
    image: productTeddy4,
    description: "Cute miniature teddy bear keychain — carry your cuddly friend everywhere! Great as a party favor or small gift.",
  },
  {
    id: "5",
    name: "Premium Gift Hamper",
    price: "₹1,299",
    category: "gift",
    image: productGift1,
    description: "A beautifully curated gift basket with chocolates, flowers, and goodies. Perfect for birthdays, celebrations, and corporate gifting.",
    featured: true,
  },
  {
    id: "6",
    name: "Colorful Gift Box Set",
    price: "₹799",
    category: "gift",
    image: productGift2,
    description: "Vibrant gift boxes in assorted sizes and colors, wrapped with premium ribbons. Ready to delight your loved ones.",
  },
  {
    id: "7",
    name: "Crystal Snow Globe",
    price: "₹899",
    category: "unique",
    image: productUnique1,
    description: "A magical snow globe with a miniature winter scene inside. Shake to watch the snow fall — a mesmerizing decorative piece.",
    featured: true,
  },
  {
    id: "8",
    name: "Luxury Candle Set",
    price: "₹699",
    category: "unique",
    image: productUnique2,
    description: "Premium scented candles in an elegant gift box. Fill any room with warmth and beautiful fragrances.",
    featured: true,
  },
  {
    id: "9",
    name: "Wooden Music Box",
    price: "₹999",
    category: "unique",
    image: productUnique3,
    description: "Handcrafted wooden music box with intricate engravings. A timeless, nostalgic gift that plays a beautiful melody.",
  },
  {
    id: "10",
    name: "Cuddly Panda Bear",
    price: "₹449",
    category: "teddy",
    image: productTeddy5,
    description: "An irresistibly cute panda plush toy that kids and adults both adore. Super soft fabric with lifelike details.",
  },
  {
    id: "11",
    name: "Giant Red Teddy Bear",
    price: "₹1,499",
    category: "teddy",
    image: productTeddy6,
    description: "A stunning oversized red teddy bear — the ultimate romantic gift. Velvety soft with a beautiful satin bow.",
    featured: true,
  },
  {
    id: "12",
    name: "Chocolate Lovers Hamper",
    price: "₹999",
    category: "gift",
    image: productGift3,
    description: "A premium chocolate gift basket overflowing with handpicked chocolates and confections. Perfect for any chocolate lover.",
  },
  {
    id: "13",
    name: "Fresh Flower Bouquet",
    price: "₹699",
    category: "gift",
    image: productGift4,
    description: "A gorgeous mixed flower bouquet with roses and seasonal blooms, elegantly wrapped. Perfect for birthdays and special occasions.",
    featured: true,
  },
  {
    id: "14",
    name: "Royal Gold Photo Frame",
    price: "₹599",
    category: "unique",
    image: productUnique4,
    description: "An ornate gold-finished photo frame with intricate baroque designs. A beautiful way to display your cherished memories.",
  },
  {
    id: "15",
    name: "Fairy Light Jar",
    price: "₹399",
    category: "unique",
    image: productUnique5,
    description: "A magical mason jar filled with warm LED fairy lights. Creates a dreamy, enchanting ambiance for any room.",
  },
];

export const WHATSAPP_NUMBER = "918329939085";
export const PHONE_NUMBER = "+918329939085";
