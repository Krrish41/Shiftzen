import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection({ testimonials }) {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What customers say after trusting ShiftZen with valuable moves"
          description="The directory is built around trust signals that matter in real relocations: careful packaging, punctual execution, and damage-free deliveries."
          centered
        />

        <Reveal delay={0.06} className="mt-12">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track">
              {marqueeTestimonials.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.author}-${index}`}
                  whileHover={{ y: -6 }}
                  className="w-[320px] flex-none rounded-[30px] border border-brand-blue/10 bg-white p-6 shadow-soft sm:w-[380px]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-brand-coral">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-base leading-8 text-slate-600">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-lg font-extrabold text-slate-950">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
