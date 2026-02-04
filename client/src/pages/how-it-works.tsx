import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, DraftingCompass, Truck } from "lucide-react";

import craftImg from "@/assets/images/wood-detail-v1.webp";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen tram-gradient"
      data-testid="page-how"
    >
      {children}
    </motion.main>
  );
}

const WHATSAPP_NUMBER = "917051136173";
const WHATSAPP_BASE_MSG = "Hello Tramboo Home, I’m interested in a custom furniture piece and would like to discuss details.";

const getWhatsappLink = () => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_BASE_MSG)}`;
};

function TopBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl" data-testid="nav-top">
      <div className="tram-container">
        <div className="flex items-center justify-between border-b border-border/60 py-5">
          <Link href="/" className="tram-focus tram-display text-lg font-semibold" data-testid="link-brand-home">
            tramboo
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/collections"
              className="tram-focus text-sm text-foreground/80 transition hover:text-foreground"
              data-testid="link-nav-collections"
            >
              Collections
            </Link>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="tram-focus inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:shadow-sm"
              data-testid="button-nav-request"
            >
              Enquire
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

const STEPS = [
  {
    title: "Custom",
    icon: DraftingCompass,
    body: "We start with space, function, and material. Share references, dimensions, and intent. Well propose a form that feels quiet and inevitable.",
    bullets: ["Brief + measurements", "Material selection", "Quote + timeline"],
  },
  {
    title: "Craft",
    icon: CheckCircle2,
    body: "Once approved, we mill, join, and finish by hand. Grain direction, edge shaping, and finish are considered at every stage.",
    bullets: ["Live-edge & joinery", "Sanding + hand oil", "Detail approval"],
  },
  {
    title: "Delivery",
    icon: Truck,
    body: "Your piece is packed, protected, and delivered with care. We provide simple guidance for long-term maintenance and refinishing.",
    bullets: ["White-glove options", "Care guide", "Long-term service"],
  },
];

export default function HowItWorks() {
  return (
    <Page>
      <TopBar />

      <section className="tram-container pt-12 md:pt-16" data-testid="section-how-hero">
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <div>
            <div className="tram-kicker text-xs text-muted-foreground" data-testid="text-how-kicker">
              Process
            </div>
            <h1 className="tram-display mt-4 text-3xl md:text-5xl font-semibold" data-testid="text-how-title">
              From idea to heirloom.
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground" data-testid="text-how-subtitle">
              A simple three-step flowcustom  craft  deliveryso the experience stays calm while the work stays exacting.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-testid="group-how-cta">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="tram-focus inline-flex items-center justify-between gap-3 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-sm transition hover:shadow"
                data-testid="button-how-start"
              >
                Start a custom order
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/collections"
                className="tram-focus inline-flex items-center justify-between gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm transition hover:shadow-sm"
                data-testid="button-how-collections"
              >
                View catalogue
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm" data-testid="img-how-wrapper">
            <img
              src={craftImg}
              alt="Craft process"
              className="h-[420px] w-full object-cover"
              data-testid="img-how"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-xl" data-testid="card-how-caption">
                <div className="tram-kicker text-[10px] text-muted-foreground" data-testid="text-how-caption-kicker">
                  Craft
                </div>
                <div className="mt-1 text-sm" data-testid="text-how-caption-title">
                  Hand-finished surfaces, matte oils, quiet edges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tram-container mt-14 pb-16 md:pb-24" data-testid="section-how-steps">
        <div className="grid gap-6 md:grid-cols-3" data-testid="grid-how-steps">
          {STEPS.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border/70 bg-card p-7 shadow-sm"
              data-testid={`card-step-${s.title.toLowerCase()}`}
            >
              <div className="flex items-center justify-between">
                <div className="tram-kicker text-[10px] text-muted-foreground">Step</div>
                <s.icon className="h-5 w-5 text-foreground/70" />
              </div>
              <div className="tram-display mt-4 text-xl font-semibold" data-testid={`text-step-title-${s.title.toLowerCase()}`}>
                {s.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground" data-testid={`text-step-body-${s.title.toLowerCase()}`}>
                {s.body}
              </p>

              <div className="mt-6 tram-hr" />
              <ul className="mt-5 space-y-2 text-sm text-foreground/80" data-testid={`list-step-${s.title.toLowerCase()}`}>
                {s.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/70 bg-card p-7 md:p-10 shadow-sm" data-testid="card-how-note">
          <div className="grid gap-6 md:grid-cols-[1fr,auto] md:items-center">
            <div>
              <div className="tram-display text-xl md:text-2xl font-semibold" data-testid="text-how-note-title">
                Timelines, transparently.
              </div>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-how-note-body">
                Most pieces take 612 weeks depending on complexity and material. If you have a date, well plan around it.
              </p>
            </div>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="tram-focus inline-flex items-center justify-between gap-3 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-sm transition hover:shadow"
              data-testid="button-how-note-cta"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="tram-container pb-14" data-testid="footer">
        <div className="tram-hr" />
        <div className="py-10 text-sm text-muted-foreground" data-testid="text-footer-note">
          TRAMBOO  Custom  craft  delivery.
        </div>
      </footer>
    </Page>
  );
}
