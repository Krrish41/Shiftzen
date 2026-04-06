import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Premium Services"
          title="Designed for complex moves, delicate cargo, and zero-chaos relocations"
          description="Every category is curated for trusted execution, careful packaging standards, and better coordination from pickup to delivery."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-[32px] border border-brand-blue/10 bg-white p-7 shadow-soft"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-coral/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg shadow-brand-blue/25"
                >
                  <service.icon className="h-6 w-6" />
                </motion.div>

                <div className="relative space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-6 space-y-3">
                  {service.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-coral" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
