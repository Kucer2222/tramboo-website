import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen tram-gradient">
      <div className="tram-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <div className="tram-kicker text-xs text-muted-foreground" data-testid="text-notfound-kicker">
            TRAMBOO
          </div>
          <h1 className="tram-display mt-4 text-4xl md:text-6xl font-semibold" data-testid="text-notfound-title">
            Page not found.
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground" data-testid="text-notfound-subtitle">
            The catalogue page you requested doesn’t exist.
          </p>

          <div className="mt-10">
            <Link href="/" data-testid="link-notfound-home" className="inline-flex items-center gap-2 tram-focus">
              <span className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-card px-4 text-sm transition hover:shadow-sm">
                <ArrowLeft className="h-4 w-4" />
                Return to Home
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
