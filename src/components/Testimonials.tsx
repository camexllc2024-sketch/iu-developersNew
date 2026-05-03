import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I&U Developers transformed our vision into reality. The attention to detail is unmatched and the final result took our breath away.",
    name: "Jean Pierre",
    role: "CEO, Kigali Investments",
  },
  {
    quote: "The quality of their finishings and their professional approach makes them the best development firm in Kigali. Truly extraordinary.",
    name: "Sarah M.",
    role: "Luxury Homeowner",
  },
  {
    quote: "Delivered on time and exceeded our expectations. A world-class team that brings international standards to local projects.",
    name: "David K.",
    role: "Private Investor",
  },
  {
    quote: "From 3D design to the final luxury fit-out, the process was seamless. They understood exactly what we wanted for our commercial space.",
    name: "Marie C.",
    role: "Business Owner",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#1B3558]"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-3 self-stretch">
                  <div className="bg-[#F4F6FA] p-8 md:p-10 rounded-2xl border border-[#1B3558]/08 h-full flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-[#C9A84C]/15" />
                    <div className="flex gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                      ))}
                    </div>
                    <p className="text-lg text-[#1B3558]/70 leading-relaxed mb-8 flex-grow italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1B3558] flex items-center justify-center text-white font-bold font-display text-lg shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-[#1B3558]">{t.name}</h4>
                        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-[#1B3558]/20 flex items-center justify-center text-[#1B3558] hover:bg-[#1B3558] hover:text-white hover:border-[#1B3558] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-[#C9A84C] w-6" : "bg-[#1B3558]/20 w-1.5"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-[#1B3558]/20 flex items-center justify-center text-[#1B3558] hover:bg-[#1B3558] hover:text-white hover:border-[#1B3558] transition-all"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
