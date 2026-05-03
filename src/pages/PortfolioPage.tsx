import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const statusFilters = ["All", "Completed", "In Progress"];

const projects = [
  {
    name: "Rwanda Kigali Villa Project",
    status: "In Progress",
    location: "Kigali Kibagabaga, Rwanda",
    img: "kigali-villa-street.jpg",
    category: "Residential",
    description: "Luxury residential villa development in Kibagabaga, combining contemporary design with traditional Rwandan architectural elements and premium finishes.",
    link: "/investor-gateway",
    linkLabel: "View Project Details",
  },
  {
    name: "Hasel Office Application",
    status: "Completed",
    location: "Istanbul, Turkey",
    img: "proj-hasel.jpg",
    category: "Commercial",
    description: "Modern office complex featuring flexible workspaces, open-plan offices, private meeting rooms, and advanced smart building technology infrastructure.",
    link: "/contact",
    linkLabel: "Enquire About This Project",
  },
  {
    name: "Nephos AI Commercial Hub",
    status: "In Progress",
    location: "Istanbul, Turkey",
    img: "proj-nephos.jpg",
    category: "Commercial",
    description: "Next-generation commercial hub designed for AI and technology companies, with AI-powered building management, high-capacity data infrastructure, and smart environmental controls.",
    link: "/contact",
    linkLabel: "Enquire About This Project",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.status === activeFilter);

  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar forceScrolled />

      <PageHero
        tag="Our Work"
        title="Featured"
        highlight="Projects"
        subtitle="A selection of residential and commercial projects across Rwanda and beyond — each one a commitment to precision and quality."
        breadcrumb="Projects"
      />

      {/* Filter */}
      <div className="bg-white sticky top-[65px] z-40 border-b border-[#1B3558]/08 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex gap-2">
          {statusFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#C9A84C] text-[#1B3558] shadow-sm"
                  : "bg-[#F4F6FA] text-[#1B3558]/65 hover:bg-[#1B3558]/08 hover:text-[#1B3558]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#1B3558]/08 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.img}`}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        project.status === "Completed"
                          ? "bg-emerald-500 text-white"
                          : "bg-[#C9A84C] text-[#1B3558]"
                      }`}>
                        {project.status}
                      </span>
                      <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-[#C9A84C]" />
                        {project.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#C9A84C] text-[11px] font-bold uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="font-display font-bold text-xl text-[#1B3558] mb-3">{project.name}</h3>
                    <p className="text-[#1B3558]/55 text-sm leading-relaxed mb-5">{project.description}</p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all group/link"
                    >
                      {project.linkLabel}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#1B3558]/35">
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B3558]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Tell us your vision. We'll build it.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B3558] font-bold px-10 py-4 rounded-md hover:bg-[#B8960A] transition-all shadow-lg group"
          >
            Start a Conversation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
