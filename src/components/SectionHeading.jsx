import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  invert = false,
}) {
  const alignment = centered
    ? "mx-auto items-center text-center"
    : "items-start text-left";
  const eyebrowClasses = invert
    ? "border-white/10 bg-white/10 text-white"
    : "border-brand-blue/10 bg-white/75 text-brand-blue";
  const titleClasses = invert ? "text-white" : "text-slate-900";
  const descriptionClasses = invert ? "text-slate-200" : "text-slate-600";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur ${eyebrowClasses}`}
      >
        <Sparkles className="h-4 w-4 text-brand-coral" />
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${titleClasses}`}>
          {title}
        </h2>
        <p className={`max-w-2xl text-base leading-7 sm:text-lg ${descriptionClasses}`}>
          {description}
        </p>
      </div>
    </Reveal>
  );
}
