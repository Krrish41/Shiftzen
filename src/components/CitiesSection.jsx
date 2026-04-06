import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CitiesSection({ cities }) {
  return (
    <section id="cities" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Top Cities Hub"
          title="Strong presence in high-demand logistics corridors"
          description="Browse premium-moving coverage across the cities where demand, response speed, and careful handling matter most."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative min-h-[320px] overflow-hidden rounded-[32px] shadow-glow"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.10), rgba(15, 23, 42, 0.72)), url(${city.image})`,
                  }}
                />

                <div className="relative flex h-full flex-col justify-end p-8">
                  <div className="max-w-md rounded-[28px] border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-coral">
                      City Operations
                    </p>
                    <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                      {city.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-100">
                      {city.blurb}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                      Explore routes
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
