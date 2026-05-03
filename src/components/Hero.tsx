import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Globe, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  const contacts = [
    { icon: Phone,  value: "+250 783 247 298",    label: "Direct Line", href: "tel:+250783247298" },
    { icon: Mail,   value: "info@iudevelopers.com", label: "Email Us",   href: "mailto:info@iudevelopers.com" },
    { icon: Globe,  value: "www.iudevelopers.com",  label: "Website",    href: "https://www.iudevelopers.com" },
    { icon: MapPin, value: "Gasabo, Kibagabaga",    label: "Headquarters", href: null },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="I&U Developers — Kigali Villa Project"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F38]/88 via-[#0D1F38]/65 to-[#0D1F38]/80 pointer-events-none" />
      </div>

      {/* Hero copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold tracking-widest uppercase mb-6 text-[10px]">
              I&U Developers Ltd
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
              Engineering <br />
              <span className="gold-gradient-text">Visionary Spaces.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed"
          >
            Rwanda's premier development firm — delivering world-class residential and commercial properties from concept to handover with uncompromising precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B3558] font-bold px-8 py-4 rounded-md hover:bg-[#B8960A] transition-all duration-200 shadow-lg hover:shadow-xl group text-base"
            >
              Explore Our Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/investor-gateway"
              className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-md border-2 border-white/50 hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[#C9A84C]/08 transition-all duration-200"
            >
              Investor Gateway
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-16 border-t border-white/10 bg-[#0A1929]/70 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {contacts.map((item, i) => {
              const inner = (
                <div className="flex items-center gap-3 px-6 py-2 border-r border-white/08 last:border-0">
                  <item.icon className="h-4 w-4 text-[#C9A84C] shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white leading-snug">{item.value}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{item.label}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} className="hover:opacity-80 transition-opacity">{inner}</a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
