import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

const featured = [
  {
    name: "Rwanda Kigali Villa Project",
    status: "In Progress",
    location: "Kibagabaga, Rwanda",
    img: "kigali-villa-street.jpg",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Hasel Office Application",
    status: "Completed",
    location: "Istanbul, Turkey",
    img: "proj-hasel.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Nephos AI Commercial Hub",
    status: "In Progress",
    location: "Istanbul, Turkey",
    img: "proj-nephos.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-[#1B3558]"
            >
              Featured <span className="gold-gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1B3558]/55 mt-3 leading-relaxed text-sm"
            >
              Residential and commercial projects across Rwanda and beyond.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:gap-3 transition-all group border-b border-[#C9A84C]/40 hover:border-[#C9A84C] pb-0.5"
            >
              View All Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 lg:gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative group rounded-2xl overflow-hidden bg-[#E8EBF0] shadow-sm ${project.span}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${project.img}`}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F38]/85 via-[#0D1F38]/10 to-transparent" />
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
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-white leading-tight">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
