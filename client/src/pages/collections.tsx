import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Filter, Search } from "lucide-react";

import riverImg from "@/assets/images/river-table.jpg";
import diningImg from "@/assets/images/dining-table.jpg";
import chairImg from "@/assets/images/chair.jpg";
import craftImg from "@/assets/images/craft.jpg";

const CATEGORIES = ["All", "River tables", "Dining tables", "Chairs", "Custom"] as const;

type Category = (typeof CATEGORIES)[number];

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  material: string;
  size: string;
  leadTime: string;
  image: string;
  priceFrom: string;
};

const PRODUCTS: Product[] = [
  {
    id: "rt-01",
    name: "Walnut River Table",
    category: "River tables",
    material: "Walnut · resin inlay",
    size: "2200 × 900",
    leadTime: "8–12 weeks",
    image: riverImg,
    priceFrom: "$6,900",
  },
  {
    id: "dt-01",
    name: "Dining Table",
    category: "Dining tables",
    material: "Walnut · matte oil finish",
    size: "2400 × 1000",
    leadTime: "6–10 weeks",
    image: diningImg,
    priceFrom: "$5,400",
  },
  {
    id: "ch-01",
    name: "Elm Chair",
    category: "Chairs",
    material: "Elm · hand-sanded",
    size: "W 520 · H 780",
    leadTime: "5–7 weeks",
    image: chairImg,
    priceFrom: "$890",
  },
  {
    id: "cu-01",
    name: "Custom Commission",
    category: "Custom",
    material: "Premium hardwoods",
    size: "Built to measure",
    leadTime: "Quoted",
    image: craftImg,
    priceFrom: "Quoted",
  },
];

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen tram-gradient"
      data-testid="page-collections"
    >
      {children}
    </motion.main>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl" data-testid="nav-top">
      <div className="tram-container">
        <div className="flex items-center justify-between border-b border-border/60 py-5">
          <Link href="/" className="tram-focus tram-display text-lg font-semibold" data-testid="link-brand-home">
            TRAMBOO
          </Link>
          <div className="flex items-center gap-2" data-testid="group-top-actions">
            <Link
              href="/contact"
              className="tram-focus inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:shadow-sm"
              data-testid="button-top-custom"
            >
              Custom order <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Collections() {
  return (
    <Page>
      <TopBar />
      <section className="tram-container pt-12 md:pt-16" data-testid="section-collections-hero">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="tram-kicker text-xs text-muted-foreground" data-testid="text-collections-kicker">
              Catalogue
            </div>
            <h1 className="tram-display mt-4 text-3xl md:text-5xl font-semibold" data-testid="text-collections-title">
              Collections
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground" data-testid="text-collections-subtitle">
              A curated set of formsriver tables, dining tables, chairs, and custom builds. Clean lines,
              calm proportions, and materials chosen for depth.
            </p>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center" data-testid="group-collections-controls">
            <label className="relative flex-1" data-testid="input-search-wrapper">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                data-testid="input-search"
                placeholder="Search pieces"
                className="tram-focus h-11 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm placeholder:text-muted-foreground"
              />
            </label>
            <button
              type="button"
              className="tram-focus inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm transition hover:shadow-sm"
              data-testid="button-filter"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" data-testid="tabs-categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={
                c === "All"
                  ? "tram-focus rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground"
                  : "tram-focus rounded-full border border-border bg-card px-4 py-2 text-xs text-foreground/80 transition hover:text-foreground"
              }
              data-testid={`tab-category-${c.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="tram-container mt-10 pb-16 md:pb-24" data-testid="section-collections-grid">
        <div className="grid gap-6 md:grid-cols-2" data-testid="grid-products">
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`card-product-${p.id}`}
            >
              <Link href="/contact" className="tram-focus group block">
                <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition group-hover:shadow">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      data-testid={`img-product-${p.id}`}
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] tram-kicker text-muted-foreground backdrop-blur"
                      data-testid={`tag-product-${p.id}`}
                    >
                      {p.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-6" data-testid={`row-title-${p.id}`}>
                      <div className="min-w-0">
                        <div className="tram-display text-xl font-semibold" data-testid={`text-name-${p.id}`}>
                          {p.name}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-material-${p.id}`}>
                          {p.material}
                        </div>
                      </div>
                      <div className="text-sm text-foreground/80" data-testid={`text-price-${p.id}`}>
                        From {p.priceFrom}
                      </div>
                    </div>

                    <div className="mt-5 tram-hr" />
                    <div className="mt-5 grid grid-cols-2 gap-4 text-sm" data-testid={`grid-meta-${p.id}`}>
                      <div>
                        <div className="tram-kicker text-[10px] text-muted-foreground">Size</div>
                        <div className="mt-1 text-foreground/80" data-testid={`text-size-${p.id}`}>
                          {p.size}
                        </div>
                      </div>
                      <div>
                        <div className="tram-kicker text-[10px] text-muted-foreground">Lead time</div>
                        <div className="mt-1 text-foreground/80" data-testid={`text-lead-${p.id}`}>
                          {p.leadTime}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 transition group-hover:text-foreground" data-testid={`link-view-${p.id}`}>
                      Request this piece <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="tram-container pb-14" data-testid="footer">
        <div className="tram-hr" />
        <div className="py-10 text-sm text-muted-foreground" data-testid="text-footer-note">
          TRAMBOO  Catalogue preview. Pricing shown is indicative.
        </div>
      </footer>
    </Page>
  );
}
