import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPinned,
  MoveRight,
  Phone,
  UserRound,
} from "lucide-react";
import Reveal from "./Reveal";

function Field({ icon: Icon, label, children }) {
  return (
    <label className="space-y-2">
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Icon className="h-4 w-4 text-brand-coral" />
        {label}
      </span>
      {children}
    </label>
  );
}

export default function HeroSection({
  badges,
  stats,
  formData,
  isSubmitted,
  onInputChange,
  onSubmit,
}) {
  return (
    <section id="home" className="relative pb-16 pt-12 sm:pb-20 lg:pb-24 lg:pt-16">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Reveal className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-blue/10 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  <badge.icon className="h-4 w-4 text-brand-coral" />
                  {badge.label}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.05} className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Relocate with Confidence.
                <span className="mt-2 block bg-gradient-to-r from-brand-blue via-blue-500 to-brand-coral bg-clip-text text-transparent">
                  Seamless Shifting Across India.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Verified professionals for home, office, and vehicle
                transportation. 100% safe, 0% stress.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#quote-form"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-coral px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-coral/30 transition hover:bg-orange-500"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-brand-blue/10 bg-white/75 px-6 py-4 text-base font-bold text-brand-blue shadow-sm backdrop-blur transition hover:border-brand-blue/20 hover:bg-white"
              >
                Explore Services
                <MoveRight className="h-5 w-5" />
              </motion.a>
            </Reveal>

            <Reveal delay={0.18} className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-[28px] p-5 shadow-soft"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-extrabold text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.16} className="lg:pl-6">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-brand-coral/20 blur-2xl sm:block" />
              <div className="absolute -right-6 bottom-10 hidden h-28 w-28 rounded-full bg-brand-blue/20 blur-2xl sm:block" />

              <div
                id="quote-form"
                className="glass-panel relative rounded-[32px] border border-white/70 p-6 shadow-glow sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-coral">
                      Get a Free Quote
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                      Find the right moving partner in minutes
                    </h2>
                  </div>
                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg shadow-brand-blue/30 sm:flex">
                    <MoveRight className="h-6 w-6" />
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={UserRound} label="Name">
                      <input
                        className="field-input"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={onInputChange}
                        required
                      />
                    </Field>
                    <Field icon={Phone} label="Mobile">
                      <input
                        className="field-input"
                        type="tel"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={onInputChange}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={Mail} label="Email">
                      <input
                        className="field-input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={onInputChange}
                        required
                      />
                    </Field>
                    <Field icon={CalendarDays} label="Date of Shifting">
                      <input
                        className="field-input"
                        type="date"
                        name="shiftingDate"
                        value={formData.shiftingDate}
                        onChange={onInputChange}
                        required
                      />
                    </Field>
                  </div>

                  <Field icon={MapPinned} label="Shifting From Address">
                    <textarea
                      className="field-textarea"
                      name="fromAddress"
                      placeholder="Pickup address"
                      value={formData.fromAddress}
                      onChange={onInputChange}
                      required
                    />
                  </Field>

                  <Field icon={MapPinned} label="Shifting To Address">
                    <textarea
                      className="field-textarea"
                      name="toAddress"
                      placeholder="Delivery address"
                      value={formData.toAddress}
                      onChange={onInputChange}
                      required
                    />
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-coral px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-coral/30 transition hover:bg-orange-500"
                  >
                    Get Instant Quote
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>

                <p className="mt-4 text-xs font-medium text-slate-500">
                  No spam. Only verified partners and a quick callback to match
                  your shifting needs.
                </p>

                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
                      Your quote request is in. A ShiftZen coordinator will
                      reach out shortly.
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
