import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin, BedDouble, LayoutDashboard, BookOpen, Sunrise, Car, Users, Flower2,
  ArrowRight, CheckCircle2, Mail, X, ChevronLeft, ChevronRight, Building2, Home
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const B = `${import.meta.env.BASE_URL}`;

const specs = [
  { icon: BedDouble,     label: "Bedrooms",          value: "4 Bedrooms" },
  { icon: LayoutDashboard, label: "Living Rooms",    value: "2 Living Rooms" },
  { icon: BookOpen,      label: "Study Room",         value: "1 Study Room" },
  { icon: Sunrise,       label: "Rooftop Terrace",    value: "Private Rooftop" },
  { icon: Car,           label: "Parking",            value: "2-Car Garage" },
  { icon: Users,         label: "Service Quarter",    value: "Dedicated S/Q" },
  { icon: Flower2,       label: "Garden",             value: "Private Garden" },
  { icon: Home,          label: "Configuration",      value: "Semi-Detached Pairs" },
];

const galleryImages = [
  { src: `${B}villa-living-4.jpg`,   label: "Main Living Room" },
  { src: `${B}villa-living-5.jpg`,   label: "Second Living Room" },
  { src: `${B}villa-living-1.jpg`,   label: "Living & Dining Open Plan" },
  { src: `${B}villa-living-3.jpg`,   label: "Formal Living Room" },
  { src: `${B}villa-kitchen-3.jpg`,  label: "Chef's Kitchen" },
  { src: `${B}villa-kitchen-2.jpg`,  label: "Kitchen & Dining" },
  { src: `${B}villa-kitchen-1.jpg`,  label: "Kitchen Overview" },
  { src: `${B}villa-hallway-2.jpg`,  label: "Grand Entry Hall" },
  { src: `${B}villa-hallway-1.jpg`,  label: "Interior Hallway" },
  { src: `${B}villa-living-2.jpg`,   label: "Living Space Detail" },
];

const exteriorImages = [
  { src: `${B}kigali-villa-street.jpg`,   label: "Street View — Building A" },
  { src: `${B}kigali-villa-street2.jpg`,  label: "Street View — Full Estate" },
  { src: `${B}kigali-villa-garden.jpg`,   label: "Garden Elevation" },
  { src: `${B}kigali-villa-garden2.jpg`,  label: "Rear Garden & Terrace" },
  { src: `${B}kigali-villa-terrace.jpg`,  label: "Entry Terrace" },
  { src: `${B}kigali-villa-terrace2.jpg`, label: "Courtyard & Terrace" },
  { src: `${B}kigali-villa-hillside.jpg`, label: "Hillside Elevation" },
  { src: `${B}kigali-villa-hillside2.jpg`,label: "Hillside — Rear Aspect" },
];

const highlights = [
  "Prime Kibagabaga address — one of Kigali's most sought-after residential neighbourhoods",
  "6 units arranged in semi-detached pairs across 3 buildings — maximum privacy with shared estate amenities",
  "Each villa delivers 4 full bedrooms, 2 spacious living rooms and a dedicated study",
  "Private rooftop terrace with panoramic Kigali views",
  "2-car private garage per unit plus on-estate visitor parking",
  "Service quarter with independent access — ideal for live-in staff",
  "Landscaped private garden, gated entry and perimeter security",
  "Premium finishes throughout — marble surfaces, bespoke joinery, designer lighting",
];

const steps = [
  { step: "01", title: "Express Interest", desc: "Complete the inquiry form below. Our investment team will respond within 24 hours to confirm your details." },
  { step: "02", title: "Investor Briefing", desc: "A private briefing covering unit specifications, pricing, projected rental yields, and payment structure." },
  { step: "03", title: "Site Visit", desc: "Schedule a guided site visit to Kibagabaga to view progress and meet the project team." },
  { step: "04", title: "Reservation", desc: "Reserve your preferred unit with a deposit and receive your legally binding reservation agreement." },
];

export default function InvestorGatewayPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const allImages = [...galleryImages, ...exteriorImages];

  const openLightbox = (idx: number) => { setLightboxIdx(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = () => setLightboxIdx((i) => (i - 1 + allImages.length) % allImages.length);
  const nextImg = () => setLightboxIdx((i) => (i + 1) % allImages.length);

  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar forceScrolled />

      <PageHero
        tag="Investor Gateway"
        title="Kigali Villa"
        highlight="Project — Kibagabaga"
        subtitle="6 premium semi-detached villas in one of Kigali's most prestigious neighbourhoods. Exceptional design, investment-grade finishes, and strong rental demand."
        breadcrumb="Investor Gateway"
      />

      {/* Project Stats Strip */}
      <div className="bg-[#1B3558]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">
          {[
            { value: "6", label: "Villa Units" },
            { value: "4", label: "Bedrooms / Unit" },
            { value: "Kibagabaga", label: "Kigali, Rwanda" },
            { value: "In Progress", label: "Project Status" },
          ].map((s, i) => (
            <div key={i} className="px-6 py-2">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#C9A84C]">{s.value}</div>
              <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Image + Quick Spec Card */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Main exterior image */}
            <div
              className="lg:col-span-3 relative rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
              onClick={() => openLightbox(galleryImages.length)}
            >
              <img
                src={`${B}kigali-villa-street2.jpg`}
                alt="Kigali Villa — Front Elevation"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3558]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#C9A84C]" />
                Kibagabaga, Kigali, Rwanda
              </div>
              <span className="absolute top-5 right-5 bg-[#C9A84C] text-[#1B3558] text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wider">
                In Progress
              </span>
            </div>

            {/* Spec card */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Project Overview</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1B3558] mt-2">Kigali Villa Project</h2>
                <p className="text-[#1B3558]/60 text-sm mt-3 leading-relaxed">
                  Six luxury semi-detached villas set within a gated private estate in the heart of Kibagabaga. Each pair of villas shares a boundary wall while maintaining full independence — separate entrances, private gardens, and dedicated parking.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {specs.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F9FC] border border-[#1B3558]/06">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/12 flex items-center justify-center shrink-0 mt-0.5">
                      <s.icon className="w-4 h-4 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#1B3558]/45 uppercase tracking-wider font-medium">{s.label}</p>
                      <p className="text-sm font-semibold text-[#1B3558] mt-0.5">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#inquiry"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#C9A84C] text-[#1B3558] font-bold px-8 py-4 rounded-md hover:bg-[#B8960A] transition-all shadow-md group"
              >
                Register Your Interest
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-20 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-3 block">Interior Renders</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B3558]">Inside Every Villa</h2>
            <p className="text-[#1B3558]/55 mt-3 text-sm leading-relaxed">
              Each villa is designed by award-winning interior architects. The renders below reflect the standard finish specification included with every unit.
            </p>
          </div>

          {/* Primary feature row — 2 large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {galleryImages.slice(0, 2).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.label} className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3558]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-4 left-4 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Masonry-style grid — remaining 8 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(2).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.07 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group shadow ${i === 2 ? "md:col-span-2" : ""}`}
                onClick={() => openLightbox(i + 2)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ${i === 2 ? "h-56" : "h-48"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3558]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Exterior thumbnails */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {exteriorImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group shadow"
                onClick={() => openLightbox(galleryImages.length + i)}
              >
                <img src={img.src} alt={img.label} className="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3558]/55 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-[#C9A84C]" /> {img.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-3 block">Why This Project</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B3558] mb-8">
                A Rare Opportunity in Kigali's Prime Real Estate Market
              </h2>
              <ul className="space-y-4">
                {highlights.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 text-[#1B3558]/70 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    {pt}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={`${B}kigali-villa-garden.jpg`}
                alt="Kigali Villa — Garden Elevation"
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1B3558] text-white p-6 rounded-2xl shadow-xl max-w-[220px]">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">Layout</p>
                <p className="font-display font-bold text-xl leading-tight">3 Buildings<br />2 Units Each</p>
                <p className="text-white/55 text-xs mt-2">Semi-detached pairs · Shared estate boundary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Invest */}
      <section className="py-24 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-3 block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B3558]">How to Reserve a Unit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-[#1B3558]/08 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#1B3558] flex items-center justify-center text-[#C9A84C] font-display font-bold text-lg mb-5">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-lg text-[#1B3558] mb-3">{s.title}</h3>
                <p className="text-[#1B3558]/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section id="inquiry" className="py-20 bg-[#1B3558]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">Reserve Your Kigali Villa</h2>
              <p className="text-white/65 mb-6 leading-relaxed text-sm">
                Units are limited. Register your interest today for priority access to pricing, floor plans, and a private viewing of the Kibagabaga estate.
              </p>
              <ul className="space-y-3 mb-8">
                {["6 units — limited availability", "Priority access for registered investors", "No obligation to proceed after briefing", "Payment plans available"].map((pt, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all group"
              >
                View all contact options
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white/08 border border-white/12 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="font-display font-bold text-white text-lg">Investor Inquiry</h3>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Your Full Name" className="w-full h-11 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm" />
                <input type="email" placeholder="Email Address" className="w-full h-11 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm" />
                <input type="tel" placeholder="Phone / WhatsApp" className="w-full h-11 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm" />
                <select className="w-full h-11 px-4 rounded-md bg-[#1B3558] border border-white/20 text-white/70 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm">
                  <option value="">Preferred Unit (optional)</option>
                  <option>Unit 1 — Building A</option>
                  <option>Unit 2 — Building A</option>
                  <option>Unit 3 — Building B</option>
                  <option>Unit 4 — Building B</option>
                  <option>Unit 5 — Building C</option>
                  <option>Unit 6 — Building C</option>
                  <option>No preference</option>
                </select>
                <textarea rows={3} placeholder="Questions or message..." className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm resize-none" />
                <button className="w-full bg-[#C9A84C] text-[#1B3558] font-bold py-3.5 rounded-md hover:bg-[#B8960A] transition-all shadow-md">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-5 right-5 text-white/70 hover:text-white p-2">
              <X className="w-7 h-7" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImg(); }} className="absolute left-4 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={allImages[lightboxIdx].src}
              alt={allImages[lightboxIdx].label}
              className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); nextImg(); }} className="absolute right-4 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {allImages[lightboxIdx].label} &nbsp;·&nbsp; {lightboxIdx + 1} / {allImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
