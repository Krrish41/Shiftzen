import {
  ArrowRight,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

export default function Footer({ links }) {
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer
      id="contact"
      className="mt-16 bg-slate-950 pb-8 pt-14 text-slate-200 sm:mt-20"
    >
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-coral">
              Advertise With Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">
              Showcase your moving business where high-intent customers already search
            </h2>
          </div>

          <a
            href="mailto:contact@shiftzen.net?subject=Advertise%20With%20ShiftZen"
            className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-brand-coral px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-coral/20 transition hover:bg-orange-500 lg:mt-0"
          >
            Advertise With Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-white">
                ShiftZen Logistics
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                Premium Packers and Movers directory for households, offices,
                vehicles, and international relocations across India.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 flex-none text-brand-coral" />
                <a
                  href="mailto:contact@shiftzen.net"
                  className="transition hover:text-white"
                >
                  contact@shiftzen.net
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-4 w-4 flex-none text-brand-coral" />
                <div className="space-y-1">
                  <a href="tel:8121951331" className="block transition hover:text-white">
                    8121951331
                  </a>
                  <a href="tel:8097631623" className="block transition hover:text-white">
                    8097631623
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-none text-brand-coral" />
                <p className="max-w-sm text-slate-300">
                  Plot NO 2, 2nd Floor, Kapil Vihar, Delhi - 110034.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-4 w-4 flex-none text-brand-coral" />
                <p className="text-slate-300">
                  Monday To Saturday 10:00 am To 8:00 pm
                  <br />
                  Sunday Closed
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Quick Links
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:contact@shiftzen.net?subject=Advertise%20With%20ShiftZen"
                className="text-sm font-semibold text-brand-coral transition hover:text-orange-300"
              >
                Advertise With Us
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Social
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-coral/40 hover:bg-white/10 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Social links are included as placeholders and can be connected to
              your live brand profiles anytime.
            </p>
          </div>
        </div>

        <div className="pt-8 text-sm text-slate-500">
          <p>
            Copyright {new Date().getFullYear()} ShiftZen Logistics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
