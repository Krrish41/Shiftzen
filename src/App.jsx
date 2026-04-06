import { useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CarFront,
  Clock3,
  Globe2,
  House,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import RoutesSection from "./components/RoutesSection";
import CitiesSection from "./components/CitiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

// Centralized content keeps the section components focused on layout and interaction.
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Cities", href: "#cities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const trustBadges = [
  { icon: BadgeCheck, label: "Verified movers only" },
  { icon: MapPinned, label: "Pan-India service network" },
  { icon: Sparkles, label: "Premium packaging support" },
];

const heroStats = [
  { icon: Star, value: "4.9/5", label: "Customer-rated service quality" },
  { icon: ShieldCheck, value: "100%", label: "Verified listings & safe handling" },
  { icon: Clock3, value: "15 min", label: "Average callback response time" },
];

const services = [
  {
    title: "Premium Home Shifting",
    description:
      "Delicate pieces get 4 to 5 layers of wrapping, export-grade cartons, and careful handling from pickup to placement.",
    icon: House,
    highlights: [
      "Furniture dismantling and reinstallation",
      "Multi-layer protection for appliances and glassware",
      "Dedicated move coordinator for every booking",
    ],
  },
  {
    title: "Corporate & Office Relocation",
    description:
      "Minimize downtime with structured move plans, weekend execution windows, and organized workstation labeling.",
    icon: BriefcaseBusiness,
    highlights: [
      "Department-wise packing strategy",
      "Server, archives, and workstation handling",
      "Move schedules tailored around business hours",
    ],
  },
  {
    title: "Safe Vehicle Transportation",
    description:
      "Cars and bikes travel in secure carriers with checkpoint updates and reinforced packaging for fragile points.",
    icon: CarFront,
    highlights: [
      "Covered trailers and bike-specific crating",
      "Photo verification before dispatch",
      "Transit support from pickup to final delivery",
    ],
  },
  {
    title: "International Relocation Services",
    description:
      "Move globally with customs support, inventory documentation, and packaging built for long-haul transit.",
    icon: Globe2,
    highlights: [
      "Door-to-port and door-to-door coordination",
      "Documentation guidance and inventory support",
      "International-ready packing standards",
    ],
  },
];

const routes = [
  {
    route: "Bangalore to Pune",
    estimate: "\u20B922,000",
    note: "1 BHK starting estimate",
  },
  {
    route: "Bangalore to Kolkata",
    estimate: "\u20B928,000",
    note: "1 BHK starting estimate",
  },
  {
    route: "Bangalore to Mumbai",
    estimate: "\u20B925,000",
    note: "1 BHK starting estimate",
  },
];

const cities = [
  {
    name: "Delhi NCR",
    blurb: "Premium household, office, and corporate relocations backed by strong last-mile reach.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bangalore",
    blurb: "Fast-moving tech-city operations with frequent intercity routes and careful electronics handling.",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mumbai",
    blurb: "Reliable apartment and vehicle transport solutions tuned for dense urban logistics.",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c4691d5d7a3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hyderabad",
    blurb: "Trusted city-to-city operations for fragile interiors, homes, offices, and quick support windows.",
    image:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    quote:
      "They did 4 to 5 layers of covering on sensitive items and taken utmost care. Completely packed in 3 hours!",
    author: "Surender Singh",
    role: "IT Engineer",
  },
  {
    quote:
      "Transported my bike from Mumbai to Patna with zero damage. Highly durable packaging!",
    author: "Anonymous Client",
    role: "Vehicle relocation customer",
  },
  {
    quote:
      "Being an interior designer, I move delicate glass sets frequently from Bangalore to Hyderabad. ShiftZen handles it flawlessly.",
    author: "Sachin Debu",
    role: "Interior Designer",
  },
];

const initialFormState = {
  name: "",
  mobile: "",
  email: "",
  shiftingDate: "",
  fromAddress: "",
  toAddress: "",
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialFormState);

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 3500);
  };

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[linear-gradient(to_bottom,rgba(30,58,138,0.08),transparent)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 -z-10 h-72 w-72 rounded-full bg-brand-coral/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-16 -z-10 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />

      <Navbar
        links={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <HeroSection
          badges={trustBadges}
          stats={heroStats}
          formData={formData}
          isSubmitted={isSubmitted}
          onInputChange={handleInputChange}
          onSubmit={handleQuoteSubmit}
        />
        <ServicesSection services={services} />
        <RoutesSection routes={routes} />
        <CitiesSection cities={cities} />
        <TestimonialsSection testimonials={testimonials} />
      </main>

      <Footer links={navLinks} />
    </div>
  );
}

export default App;
