import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const testimonials = [
  {
    quote: "I&U Developers transformed our vision into reality. The attention to detail is unmatched and the final result took our breath away. From the first consultation to the final handover, we felt like royalty.",
    name: "Jean Pierre Habimana",
    role: "CEO, Kigali Investments Group",
    project: "Residential Villa, Kiyovu",
    rating: 5,
  },
  {
    quote: "The quality of their finishings and their professional approach makes them the best development firm in Kigali. Truly extraordinary craftsmanship. I've worked with firms in Europe and this team matches that standard.",
    name: "Sarah Mukandayisenga",
    role: "Luxury Homeowner",
    project: "Interior Fit-Out, Nyarutarama",
    rating: 5,
  },
  {
    quote: "Delivered on time and exceeded our expectations at every turn. A world-class team that brings international standards to local projects. Our commercial building is now the pride of the neighbourhood.",
    name: "David Karangwa",
    role: "Private Investor",
    project: "Commercial Complex, Kimihurura",
    rating: 5,
  },
  {
    quote: "From 3D design to the final luxury fit-out, the process was seamless and transparent. They understood exactly what we wanted for our commercial space and executed it flawlessly.",
    name: "Marie Claire Umutoniwase",
    role: "Business Owner",
    project: "Office Interior, CBD Kigali",
    rating: 5,
  },
  {
    quote: "Our dream home became a reality thanks to I&U Developers. The team's dedication, creativity, and precision made the entire journey enjoyable. Worth every penny — the result is breathtaking.",
    name: "Emmanuel & Grace Ndayisaba",
    role: "Homeowners",
    project: "Custom Villa, Gacuriro",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and genuinely passionate about their craft. The 3D visualization phase gave us so much confidence. We saw exactly what we'd get before a single wall was built.",
    name: "Patrick Niyomugabo",
    role: "Real Estate Developer",
    project: "Multi-unit Residential, Remera",
    rating: 5,
  },
];

const stats = [
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "50+", label: "Projects Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "10+", label: "Years of Excellence" },
];

export default function TestimonialsPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar forceScrolled />

      <PageHero
        tag="Client Stories"
        title="What Our Clients"
        highlight="Say About Us"
        subtitle="Real experiences from the visionary homeowners and investors we've had the privilege of serving across Rwanda."
        breadcrumb="Testimonials"
      />

      {/* Stats */}
      <div className="bg-[#F4F6FA] border-b border-[#1B3558]/08">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1B3558]/10 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-2">
              <div className="text-3xl font-display font-bold text-[#1B3558]">{s.value}</div>
              <div className="text-sm text-[#1B3558]/55 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F4F6FA] p-8 rounded-2xl border border-[#1B3558]/08 flex flex-col relative hover:shadow-lg transition-shadow"
              >
                <Quote className="absolute top-7 right-7 w-10 h-10 text-[#C9A84C]/12" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-[#1B3558]/75 leading-relaxed mb-6 flex-grow italic text-sm">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#1B3558]/08 pt-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1B3558] flex items-center justify-center text-white font-bold font-display text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#1B3558] text-base">{t.name}</div>
                    <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider">{t.role}</div>
                    <div className="text-[#1B3558]/45 text-xs mt-0.5">{t.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B3558]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">Join Our Family of Satisfied Clients</h2>
          <p className="text-white/65 mb-8 text-lg">Book a free consultation and see why Rwanda's leading investors trust I&U Developers.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B3558] font-bold px-8 py-4 rounded-md hover:bg-[#B8960A] transition-all shadow-lg group">
              Book a Free Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-md border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
