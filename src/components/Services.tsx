import { motion } from "framer-motion";
import { PenTool, Sofa, HardHat, Box, Sparkles, Briefcase } from "lucide-react";

const services = [
  { icon: PenTool,   title: "Architectural Design",     description: "Tailored blueprints that balance your vision with structural integrity and long-term livability." },
  { icon: Sofa,      title: "Interior Design",          description: "Curated spaces — from material selection to lighting — designed around how you live." },
  { icon: HardHat,   title: "Construction Management",  description: "Full-site oversight with rigorous quality control and consistent timeline delivery." },
  { icon: Box,       title: "3D Visualization",         description: "Photorealistic renders and walkthroughs so you can see your project before it's built." },
  { icon: Sparkles,  title: "Luxury Fit-Out",           description: "Bespoke joinery, premium stone, and smart-home integration finished to international standards." },
  { icon: Briefcase, title: "Project Consulting",       description: "Strategic advice for investors and developers — from feasibility to regulatory approval." },
];

export function Services() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-5 text-[#1B3558]"
          >
            Six Services. <span className="text-[#C9A84C]">One Team.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#1B3558]/60 text-base leading-relaxed"
          >
            From first sketch to final handover — every discipline, in-house.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-[#F8F9FC] border border-[#1B3558]/08 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/12 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C] transition-all duration-300">
                <service.icon className="h-5 w-5 text-[#C9A84C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-[#1B3558]">{service.title}</h3>
              <p className="text-[#1B3558]/55 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
