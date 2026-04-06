import { motion } from "framer-motion";
import { BadgeCheck, MapPin, MoveRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function RoutesSection({ routes }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="rounded-[36px] bg-gradient-to-br from-brand-blue via-blue-800 to-slate-950 px-6 py-10 text-white shadow-glow sm:px-10 sm:py-14">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Transparent starting estimates for frequent city-to-city moves"
            description="Indicative prices help set expectations early while verified movers refine your final quote based on inventory, floors, access, and service level."
            invert
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {routes.map((route, index) => (
              <Reveal key={route.route} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="h-full rounded-[30px] border border-white/10 bg-white/10 p-7 shadow-soft backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-coral">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                      <BadgeCheck className="h-3.5 w-3.5 text-brand-coral" />
                      Verified Route
                    </span>
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-base font-semibold text-slate-100">
                    <span>{route.route.split(" to ")[0]}</span>
                    <MoveRight className="h-4 w-4 text-brand-coral" />
                    <span>{route.route.split(" to ")[1]}</span>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                      Starting At
                    </p>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight text-white">
                      {route.estimate}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {route.note}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
