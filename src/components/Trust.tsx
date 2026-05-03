import { motion } from "framer-motion";
import { Shield, Clock, Users, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Premium Quality",   desc: "Every detail — material, finish, and fitting — held to an exacting standard." },
  { icon: Clock,  title: "On-Time Delivery",  desc: "Structured project management with milestone tracking and scheduled handovers." },
  { icon: Users,  title: "Expert Team",       desc: "Architects, engineers, and master craftsmen with deep regional expertise." },
  { icon: Heart,  title: "Client-First",      desc: "Clear communication, honest pricing, and service tailored to your goals." },
];

export function Trust() {
  return (
    <section className="py-20 bg-[#1B3558]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] transition-all duration-300">
                <val.icon className="w-6 h-6 text-[#C9A84C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{val.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
