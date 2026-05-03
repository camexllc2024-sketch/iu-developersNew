import { motion } from "framer-motion";
import { PenTool, Sofa, HardHat, Box, Sparkles, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const services = [
  {
    icon: PenTool,
    title: "Architectural Design",
    description: "Our architectural team delivers visionary blueprints that balance aesthetic beauty with structural integrity and sustainable building practices. Every design is tailor-made to your lifestyle and aspirations.",
    features: ["Concept & Schematic Design", "Planning & Approvals", "Structural Engineering", "Sustainable Architecture"],
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description: "We curate spaces that reflect sophisticated luxury, personalized to elevate your daily living experience. From material selection to custom furniture, every detail reflects your unique identity.",
    features: ["Space Planning", "Bespoke Furniture", "Material & Finish Selection", "Lighting Design"],
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "End-to-end execution with uncompromising quality control and precise timeline adherence. We manage every sub-contractor, material delivery, and site inspection so you don't have to.",
    features: ["Project Scheduling", "Budget Control", "Quality Assurance", "On-Site Supervision"],
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "Photorealistic renderings and immersive walkthroughs allow you to experience your space long before the first brick is laid — so you can refine and perfect your vision with confidence.",
    features: ["Photo-Realistic Renders", "360° Virtual Tours", "Animation Walkthroughs", "Material Previews"],
  },
  {
    icon: Sparkles,
    title: "Luxury Fit-Out",
    description: "Premium detailing, bespoke joinery, and flawless finishing define true high-end properties. Our fit-out team sources international-grade materials and crafts interiors to world-class standards.",
    features: ["Custom Joinery & Millwork", "Stone & Marble Work", "High-End FF&E", "Smart Home Integration"],
  },
  {
    icon: Briefcase,
    title: "Project Consulting",
    description: "Strategic advisory for real estate investors, developers, and landowners. We provide comprehensive feasibility studies, development planning, and market analysis to maximize your investment returns.",
    features: ["Feasibility Studies", "Investment Analysis", "Development Strategy", "Regulatory Advisory"],
  },
];

const process = [
  { step: "01", title: "Discovery & Brief", desc: "We start by deeply understanding your vision, lifestyle, budget, and timeline through a series of focused consultations." },
  { step: "02", title: "Concept Design", desc: "Our architects and designers develop conceptual plans, mood boards, and preliminary 3D visuals for your review and approval." },
  { step: "03", title: "Design Development", desc: "Approved concepts evolve into detailed construction drawings, specifications, material schedules, and accurate cost estimates." },
  { step: "04", title: "Construction", desc: "Our skilled site teams execute with precision — managing every trade, timeline, and quality checkpoint throughout the build." },
  { step: "05", title: "Fit-Out & Finishing", desc: "We apply the final luxury touches — custom joinery, bespoke furniture, stone work, and smart-home systems." },
  { step: "06", title: "Handover", desc: "A comprehensive walkthrough and full documentation package ensures you receive your dream property in perfect condition." },
];

export default function ExpertisePage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar forceScrolled />

      <PageHero
        tag="Our Services"
        title="End-to-End"
        highlight="Development Expertise"
        subtitle="Architecture, construction, interiors, and consulting — delivered by one team, under one roof."
        breadcrumb="Expertise"
      />

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B3558]">Six Services. One Team.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-[#F8F9FC] border border-[#1B3558]/08 hover:border-[#C9A84C]/35 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/12 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-all duration-300">
                  <service.icon className="h-6 w-6 text-[#C9A84C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-[#1B3558]">{service.title}</h3>
                <p className="text-[#1B3558]/60 leading-relaxed text-sm mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-[#1B3558]/70">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B3558]">From Brief to Handover</h2>
            <p className="text-[#1B3558]/55 mt-4 text-sm leading-relaxed">A structured six-step process — from brief to handover — designed for clarity and quality at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-white p-8 rounded-2xl border border-[#1B3558]/08 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display text-6xl font-bold text-[#1B3558]/06 absolute top-6 right-6 leading-none select-none">{p.step}</span>
                <span className="text-[#C9A84C] font-bold text-sm tracking-widest mb-4 block">{p.step}</span>
                <h3 className="font-display font-bold text-xl text-[#1B3558] mb-3">{p.title}</h3>
                <p className="text-[#1B3558]/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B3558]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">Ready to start?</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Tell us about your project and we'll send a tailored proposal within 48 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B3558] font-bold px-8 py-4 rounded-md hover:bg-[#B8960A] transition-all shadow-lg group">
              Get a Free Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-md border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
