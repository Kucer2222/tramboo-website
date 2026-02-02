import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import studioImg from "@/assets/images/studio.jpg";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen tram-gradient"
      data-testid="page-contact"
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
          <Link
            href="/collections"
            className="tram-focus text-sm text-foreground/80 transition hover:text-foreground"
            data-testid="link-nav-collections"
          >
            Collections
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Contact() {
  return (
    <Page>
      <TopBar />

      <section className="tram-container pt-12 md:pt-16" data-testid="section-contact-hero">
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <div>
            <div className="tram-kicker text-xs text-muted-foreground" data-testid="text-contact-kicker">
              Custom order
            </div>
            <h1 className="tram-display mt-4 text-3xl md:text-5xl font-semibold" data-testid="text-contact-title">
              Request a piece.
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground" data-testid="text-contact-subtitle">
              Share the basics and well respond with a direction, estimate, and timeline. This is a prototypeno messages are sent.
            </p>

            <form
              className="mt-10 space-y-4"
              onSubmit={(e) => e.preventDefault()}
              data-testid="form-custom-order"
            >
              <div className="grid gap-4 md:grid-cols-2" data-testid="grid-contact-fields">
                <label className="space-y-2" data-testid="field-name">
                  <div className="tram-kicker text-[10px] text-muted-foreground">Name</div>
                  <input
                    className="tram-focus h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm"
                    placeholder="Your name"
                    data-testid="input-name"
                  />
                </label>
                <label className="space-y-2" data-testid="field-email">
                  <div className="tram-kicker text-[10px] text-muted-foreground">Email</div>
                  <input
                    className="tram-focus h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm"
                    placeholder="you@domain.com"
                    data-testid="input-email"
                  />
                </label>
              </div>

              <label className="space-y-2" data-testid="field-piece">
                <div className="tram-kicker text-[10px] text-muted-foreground">What are we making?</div>
                <input
                  className="tram-focus h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm"
                  placeholder="River table, dining table, chairs, custom build"
                  data-testid="input-piece"
                />
              </label>

              <label className="space-y-2" data-testid="field-details">
                <div className="tram-kicker text-[10px] text-muted-foreground">Details</div>
                <textarea
                  className="tram-focus min-h-[130px] w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm"
                  placeholder="Dimensions, wood preference (walnut/elm), finish, reference links, timeline..."
                  data-testid="textarea-details"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center" data-testid="group-contact-actions">
                <button
                  type="submit"
                  className="tram-focus inline-flex items-center justify-between gap-3 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-sm transition hover:shadow"
                  data-testid="button-submit"
                >
                  Submit request
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <div className="text-sm text-muted-foreground" data-testid="status-form">
                  Prototype only  submissions are not stored.
                </div>
              </div>
            </form>

            <div className="mt-10 grid gap-4 sm:grid-cols-3" data-testid="grid-contact-info">
              <div className="rounded-2xl border border-border/70 bg-card p-4" data-testid="card-contact-email">
                <Mail className="h-4 w-4 text-foreground/70" />
                <div className="mt-3 text-sm">hello@tramboo.studio</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card p-4" data-testid="card-contact-phone">
                <Phone className="h-4 w-4 text-foreground/70" />
                <div className="mt-3 text-sm">+00 0000 000 000</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card p-4" data-testid="card-contact-location">
                <MapPin className="h-4 w-4 text-foreground/70" />
                <div className="mt-3 text-sm">Worldwide delivery</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm" data-testid="img-contact-wrapper">
            <img
              src={studioImg}
              alt="Studio"
              className="h-[620px] w-full object-cover"
              data-testid="img-contact"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-xl" data-testid="card-contact-caption">
                <div className="tram-kicker text-[10px] text-muted-foreground" data-testid="text-contact-caption-kicker">
                  Notes
                </div>
                <div className="mt-1 text-sm" data-testid="text-contact-caption-title">
                  Share your space, and well shape the object to it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="tram-container mt-16 pb-14" data-testid="footer">
        <div className="tram-hr" />
        <div className="grid gap-10 py-10 md:grid-cols-2 md:items-center">
          <div className="text-sm text-muted-foreground" data-testid="text-footer-note">
            TRAMBOO  We reply within 12 business days (prototype copy).
          </div>
          <div className="flex gap-4 md:justify-end">
            <Link
              href="/how-it-works"
              className="tram-focus inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:shadow-sm"
              data-testid="link-footer-how"
            >
              How it works <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/collections"
              className="tram-focus inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground shadow-sm transition hover:shadow"
              data-testid="link-footer-collections"
            >
              Browse pieces <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </Page>
  );
}
