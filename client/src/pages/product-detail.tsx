import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Info } from "lucide-react";

import riverImg from "@/assets/images/river-table.jpg";
import diningImg from "@/assets/images/dining-table.jpg";
import chairImg from "@/assets/images/chair.jpg";
import craftImg from "@/assets/images/craft.jpg";
import studioImg from "@/assets/images/studio.jpg";

const PRODUCTS = [
  {
    id: "rt-01",
    name: "Walnut River Table",
    category: "River tables",
    material: "Walnut · Resin Inlay",
    size: "2200 × 900",
    leadTime: "8–12 weeks",
    image: riverImg,
    gallery: [riverImg, studioImg, craftImg],
    description: "A centerpiece of natural movement. We select live-edge walnut slabs with deep character, binding them with a hand-poured resin 'river'. Each table is a one-of-one conversation between raw texture and polished form.",
    details: ["Solid Walnut slabs", "Customizable resin color", "Hand-finished matte oil", "Matte black steel base"]
  },
  {
    id: "dt-01",
    name: "Dining Table",
    category: "Dining tables",
    material: "Walnut · Matte Oil Finish",
    size: "2400 × 1000",
    leadTime: "6–10 weeks",
    image: diningImg,
    gallery: [diningImg, studioImg, craftImg],
    description: "The classic tramboo dining form. Quiet proportions and invisible strength. Built with traditional joinery that allows the timber to breathe and move over generations. A surface designed for life.",
    details: ["Premium Walnut timber", "Traditional mortise and tenon", "Seats 8-10 comfortably", "Reinforced understructure"]
  },
  {
    id: "ch-01",
    name: "Elm Chair",
    category: "Chairs",
    material: "Elm · Hand-Sanded",
    size: "W 520 · H 780",
    leadTime: "5–7 weeks",
    image: chairImg,
    gallery: [chairImg, studioImg, craftImg],
    description: "Sculpted for the body, built for the eyes. The Elm Chair uses the lighter grain of elm to create a silhouette that feels weightless but incredibly stable. Every curve is sanded by hand until it feels like silk.",
    details: ["Solid Elm frame", "Ergonomic sculpted seat", "Lightweight profile", "Invisible joint reinforcement"]
  },
  {
    id: "cu-01",
    name: "Custom Commission",
    category: "Custom",
    material: "Premium Hardwoods",
    size: "Built to Measure",
    leadTime: "Quoted",
    image: craftImg,
    gallery: [craftImg, studioImg, riverImg],
    description: "Your space, our craft. From library shelving to unique bedside forms, we work with you to design a piece that fits perfectly into your architecture and intent.",
    details: ["Bespoke design process", "Choice of premium hardwoods", "Collaborative drafting", "One-of-one authenticity"]
  },
];

const WHATSAPP_NUMBER = "919797374231";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return null;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello tramboo studio, I am interested in the ${product.name}. Could you provide more details?`
  )}`;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen tram-gradient"
      data-testid="page-product-detail"
    >
      <header className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="tram-container">
          <div className="flex items-center justify-between border-b border-border/60 py-5">
            <Link href="/collections" className="tram-focus flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to catalogue
            </Link>
            <div className="tram-display font-semibold">tramboo</div>
          </div>
        </div>
      </header>

      <section className="tram-container py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-sm"
            >
              <img src={product.image} alt={product.name} className="h-[450px] md:h-[600px] w-full object-cover" />
            </motion.div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                  <img src={img} alt={`${product.name} detail ${idx}`} className="h-32 w-full object-cover opacity-80 hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="tram-kicker text-xs text-muted-foreground">{product.category}</div>
            <h1 className="tram-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{product.name}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 border-y border-border/60 py-8">
              <div>
                <div className="tram-kicker text-[10px] text-muted-foreground uppercase">Material</div>
                <div className="mt-2 text-sm font-medium">{product.material}</div>
              </div>
              <div>
                <div className="tram-kicker text-[10px] text-muted-foreground uppercase">Standard Size</div>
                <div className="mt-2 text-sm font-medium">{product.size}</div>
              </div>
              <div>
                <div className="tram-kicker text-[10px] text-muted-foreground uppercase">Lead Time</div>
                <div className="mt-2 text-sm font-medium">{product.leadTime}</div>
              </div>
              <div>
                <div className="tram-kicker text-[10px] text-muted-foreground uppercase">Authenticity</div>
                <div className="mt-2 text-sm font-medium">Stamped & Signed</div>
              </div>
            </div>

            <div className="mt-8">
              <div className="tram-kicker text-[10px] text-muted-foreground uppercase mb-4">Features</div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/85">
                    <Check className="h-4 w-4 text-foreground/40" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="tram-focus group inline-flex h-14 items-center justify-between rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition hover:shadow-xl active:scale-[0.98]"
                data-testid="button-enquire-whatsapp"
              >
                Enquire Now
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <Info className="h-3 w-3" />
                <span>Redirects to tramboo studio on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="tram-container pb-14 mt-12">
        <div className="tram-hr" />
        <div className="py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} tramboo studio — Crafted for generations.
        </div>
      </footer>
    </motion.main>
  );
}
