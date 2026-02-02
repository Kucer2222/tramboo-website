import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import heroImg from "@/assets/images/studio.jpg";
import woodGrainImg from "@/assets/images/wood-grain.jpg";
import riverImg from "@/assets/images/river-table.jpg";
import diningImg from "@/assets/images/dining-table.jpg";
import chairImg from "@/assets/images/chair.jpg";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen tram-gradient"
      data-testid="page-home"
    >
      {children}
    </motion.main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl" data-testid="nav-top">
      <div className="tram-container">
        <div className="flex items-center justify-between border-b border-border/60 py-5">
          <Link
            href="/"
            className="tram-focus flex items-baseline gap-2"
            data-testid="link-brand-home"
          >
            <span className="tram-display text-lg font-semibold tracking-tight">tramboo</span>
            <span className="text-xs text-muted-foreground tram-kicker">Bespoke</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" data-testid="nav-links">
            <Link
              href="/collections"
              className="tram-focus text-sm text-foreground/80 transition hover:text-foreground"
              data-testid="link-nav-collections"
            >
              Collections
            </Link>
            <Link
              href="/how-it-works"
              className="tram-focus text-sm text-foreground/80 transition hover:text-foreground"
              data-testid="link-nav-how"
            >
              How it works
            </Link>
            <Link
              href="/contact"
              className="tram-focus text-sm text-foreground/80 transition hover:text-foreground"
              data-testid="link-nav-contact"
            >
              Custom order
            </Link>
          </nav>

          <Link
            href="/contact"
            className="tram-focus inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:shadow-sm"
            data-testid="button-nav-request"
          >
            Request a piece
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 340], [1, 0.6]);

  return (
    <section className="tram-container pt-14 md:pt-20" data-testid="section-hero">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <div>
          <div
            className="tram-kicker text-xs text-muted-foreground"
            data-testid="text-hero-kicker"
          >
            River tables · Dining · Chairs · Custom
          </div>
          <h1
            className="tram-display mt-5 text-[2.4rem] leading-[1.03] md:text-[4.25rem] md:leading-[1.02] font-semibold"
            data-testid="text-hero-title"
          >
            A quiet catalogue of
            <span className="block">bespoke hardwood pieces.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-subtitle">
            tramboo crafts river tables, dining tables, chairs, and one-of-one commissions in
            walnut, elm, and premium hardwoods—designed to age beautifully.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" data-testid="group-hero-cta">
            <Link
              href="/collections"
              className="tram-focus group inline-flex items-center justify-between gap-3 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-sm transition hover:shadow"
              data-testid="button-hero-collections"
            >
              View collections
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="tram-focus inline-flex items-center justify-between gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm transition hover:shadow-sm"
              data-testid="button-hero-custom"
            >
              Start a custom order
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6" data-testid="grid-hero-metrics">
            {[
              { label: "Materials", value: "Walnut · Elm" },
              { label: "Made to order", value: "612 weeks" },
              { label: "Finish", value: "Hand-rubbed oil" },
            ].map((m, idx) => (
              <div key={m.label} className="space-y-1" data-testid={`metric-${idx}`}>
                <div className="tram-kicker text-[10px] text-muted-foreground">{m.label}</div>
                <div className="text-sm text-foreground/85">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div style={{ y, opacity }} className="relative" data-testid="img-hero-wrapper">
          <div className="absolute -inset-8 rounded-[2.25rem] bg-white/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-card shadow-md">
            <img
              src={heroImg}
              alt="tramboo studio"
              className="h-[420px] w-full object-cover md:h-[520px]"
              data-testid="img-hero"
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="tram-kicker text-[10px] text-muted-foreground" data-testid="text-hero-caption-kicker">
                      Featured
                    </div>
                    <div className="mt-1 truncate text-sm" data-testid="text-hero-caption-title">
                      Studio Series — Walnut & linen tones
                    </div>
                  </div>
                  <div className="hidden text-xs text-muted-foreground md:block" data-testid="text-hero-caption-meta">
                    Hand-finished · Built to last
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Featured() {
  const items = [
    {
      title: "Walnut River Table",
      subtitle: "Live-edge slab, resin inlay",
      image: riverImg,
      tag: "River",
    },
    {
      title: "Dining Table",
      subtitle: "Classic joinery, modern proportion",
      image: diningImg,
      tag: "Dining",
    },
    {
      title: "Elm Chair",
      subtitle: "Light profile, sculpted comfort",
      image: chairImg,
      tag: "Seating",
    },
  ];

  return (
    <section className="tram-container mt-16 md:mt-24" data-testid="section-featured">
      <div className="flex items-end justify-between gap-8">
        <div>
          <div className="tram-kicker text-xs text-muted-foreground" data-testid="text-featured-kicker">
            Limited selections
          </div>
          <h2 className="tram-display mt-4 text-2xl md:text-4xl font-semibold" data-testid="text-featured-title">
            Large forms, calm details.
          </h2>
        </div>
        <Link
          href="/collections"
          className="tram-focus hidden items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground md:inline-flex"
          data-testid="link-featured-all"
        >
          Explore catalogue <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3" data-testid="grid-featured">
        {items.map((p) => (
          <Link
            key={p.title}
            href="/collections"
            className="tram-focus group"
            data-testid={`card-product-${p.tag.toLowerCase()}`}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  data-testid={`img-product-${p.tag.toLowerCase()}`}
                />
                <div className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] tram-kicker text-muted-foreground backdrop-blur"
                  data-testid={`tag-product-${p.tag.toLowerCase()}`}
                >
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="tram-display text-lg font-semibold" data-testid={`text-product-title-${p.tag.toLowerCase()}`}>
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-product-subtitle-${p.tag.toLowerCase()}`}>
                  {p.subtitle}
                </div>
                <div className="mt-5 tram-hr" />
                <div className="mt-4 flex items-center justify-between text-sm" data-testid={`row-product-meta-${p.tag.toLowerCase()}`}>
                  <span className="text-foreground/75">Made to order</span>
                  <span className="inline-flex items-center gap-1 text-foreground/85">
                    View <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/collections"
          className="tram-focus inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground"
          data-testid="link-featured-all-mobile"
        >
          Explore catalogue <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function BrandStatement() {
  return (
    <section className="tram-container mt-16 md:mt-24" data-testid="section-statement">
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-10 shadow-sm">
          <div className="tram-kicker text-xs text-muted-foreground" data-testid="text-statement-kicker">
            Brand statement
          </div>
          <h3 className="tram-display mt-4 text-2xl md:text-3xl font-semibold" data-testid="text-statement-title">
            Designed with character.
            <span className="block">Built for generations.</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground" data-testid="text-statement-body">
            We treat wood like a living material: grain direction, movement, and finish are
            considered from the first sketch to the final polish. Every commission is crafted to
            bring warmth and clarity to a space—never noise.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-5" data-testid="grid-statement-stats">
            {[
              { v: "+28", l: "Limited forms" },
              { v: "+12", l: "Years craft" },
              { v: "+100", l: "Unique builds" },
            ].map((s, idx) => (
              <div key={s.l} className="space-y-1" data-testid={`stat-${idx}`}>
                <div className="tram-display text-2xl font-semibold">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
          <img
            src={woodGrainImg}
            alt="Walnut grain texture"
            className="h-full min-h-[320px] w-full object-cover"
            data-testid="img-wood-grain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-md">
              <div className="tram-kicker text-[10px] text-muted-foreground" data-testid="text-materials-kicker">
                Materials
              </div>
              <div className="tram-display mt-2 text-xl font-semibold" data-testid="text-materials-title">
                Walnut, elm, premium hardwoods.
              </div>
              <div className="mt-2 text-sm text-muted-foreground" data-testid="text-materials-body">
                Hand-selected slabs. Subtle, matte finishes. Thoughtful joinery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="tram-container mt-16 md:mt-24 pb-14" data-testid="footer">
      <div className="tram-hr" />
      <div className="grid gap-10 py-10 md:grid-cols-3">
        <div>
          <div className="tram-display text-lg font-semibold" data-testid="text-footer-brand">
            tramboo
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground" data-testid="text-footer-tagline">
            Bespoke hardwood furniture, made quietly and deliberately.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8" data-testid="footer-links">
          <div>
            <div className="tram-kicker text-[10px] text-muted-foreground">Sitemap</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/" className="tram-focus block text-foreground/75 hover:text-foreground" data-testid="link-footer-home">Home</Link>
              <Link href="/collections" className="tram-focus block text-foreground/75 hover:text-foreground" data-testid="link-footer-collections">Collections</Link>
              <Link href="/how-it-works" className="tram-focus block text-foreground/75 hover:text-foreground" data-testid="link-footer-how">How it works</Link>
              <Link href="/contact" className="tram-focus block text-foreground/75 hover:text-foreground" data-testid="link-footer-contact">Custom order</Link>
            </div>
          </div>
          <div>
            <div className="tram-kicker text-[10px] text-muted-foreground">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-foreground/75">
              <div data-testid="text-footer-email">hello@tramboo.studio</div>
              <div data-testid="text-footer-location">Made in small batches</div>
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground" data-testid="text-footer-note">
          © {new Date().getFullYear()} tramboo. All imagery is placeholder for prototype.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <Page>
      <Nav />
      <Hero />
      <Featured />
      <BrandStatement />
      <Footer />
    </Page>
  );
}
