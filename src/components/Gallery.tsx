import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "kigali-villa-street2.jpg", label: "Kigali Villa · Street View", tall: true },
  { src: "villa-living-1.jpg", label: "Living Room · Kigali Villa" },
  { src: "villa-kitchen-1.jpg", label: "Open Kitchen · Kigali Villa" },
  { src: "villa-hallway-1.jpg", label: "Entry Hallway", tall: true },
  { src: "villa-living-3.jpg", label: "Lounge · Natural Light" },
  { src: "proj-hasel.jpg", label: "Hasel Office · Istanbul" },
  { src: "villa-kitchen-2.jpg", label: "Chef's Kitchen", tall: true },
  { src: "villa-living-4.jpg", label: "Family Living Area" },
  { src: "proj-nephos.jpg", label: "Nephos AI Hub · Istanbul" },
  { src: "villa-hallway-2.jpg", label: "Stair Hallway" },
  { src: "villa-kitchen-3.jpg", label: "Kitchen Detailing", tall: true },
  { src: "villa-living-5.jpg", label: "Evening Lounge" },
];

export function Gallery() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block">
            Inside Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1B3558] leading-tight mb-5">
            A Glimpse <span className="text-[#C9A84C]">Inside.</span>
          </h2>
          <p className="text-[#1B3558]/65 text-lg leading-relaxed">
            From villa exteriors to interior renders — a curated look at the spaces we design and deliver.
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="mb-4 break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={`${import.meta.env.BASE_URL}${img.src}`}
                alt={img.label}
                loading="lazy"
                className={`w-full ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover group-hover:scale-105 transition-transform duration-700`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F38]/85 via-[#0D1F38]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#C9A84C] mb-1">I&U Developers</div>
                  <div className="text-white text-sm font-semibold">{img.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-[#1B3558]/10"
        >
          <p className="text-[#1B3558]/65 text-base text-center sm:text-left">
            More renders, floor plans and walkthroughs available on the project pages.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#1B3558] text-white font-bold px-8 py-4 rounded-md hover:bg-[#C9A84C] hover:text-[#1B3558] transition-all duration-300 group whitespace-nowrap"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
