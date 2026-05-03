import { motion } from "framer-motion";

interface PageHeroProps {
  tag: string;
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: string;
}

export function PageHero({ tag, title, highlight, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-[#1B3558] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.18),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/50 text-sm mb-2 font-medium">
            <a href="/" className="hover:text-[#C9A84C] transition-colors">Home</a>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-[#C9A84C]">{breadcrumb}</span>
          </p>
          <span className="inline-block py-1 px-4 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-5">
            {tag}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-5 leading-tight">
            {title}{" "}
            {highlight && <span className="gold-gradient-text">{highlight}</span>}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
