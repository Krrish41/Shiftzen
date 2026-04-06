import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, Truck, X } from "lucide-react";

export default function Navbar({ links, isMenuOpen, setIsMenuOpen }) {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="section-shell">
        <nav className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft sm:px-6">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-blue-500 text-white shadow-lg shadow-brand-blue/30">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight text-slate-950">
                ShiftZen
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                Logistics Directory
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="tel:8121951331"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-2xl bg-brand-coral px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-coral/30 transition hover:bg-orange-500"
            >
              <motion.span
                animate={{ scale: [1, 1.18, 1], opacity: [1, 0.82, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"
              >
                <PhoneCall className="h-4 w-4" />
              </motion.span>
              Call Now: 8121951331
            </motion.a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-700 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
              className="glass-panel mt-3 overflow-hidden rounded-2xl border border-white/80 shadow-soft md:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-blue/5 hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:8121951331"
                  onClick={closeMenu}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-coral px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-coral/25"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call Now: 8121951331
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
