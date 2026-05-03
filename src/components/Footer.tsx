import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3558] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="I&U Developers Ltd"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Elevating Rwanda's architectural landscape with world-class residential and commercial developments. Uncompromising quality, visionary design.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#C9A84C] hover:text-white transition-all duration-300"
                  aria-label="Social Link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Our Expertise", href: "/expertise" },
                { label: "Investor Gateway", href: "/investor-gateway" },
                { label: "Projects", href: "/projects" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 hover:text-[#C9A84C] transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Architectural Design", href: "/expertise" },
                { label: "Luxury Fit-Out", href: "/expertise" },
                { label: "Construction", href: "/expertise" },
                { label: "3D Visualization", href: "/expertise" },
                { label: "Consulting", href: "/expertise" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 hover:text-[#C9A84C] transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm flex items-start gap-3">
                <span className="text-[#C9A84C] mt-0.5 font-bold">A:</span> Kibagabaga, Gasabo, Kigali, Rwanda
              </li>
              <li className="text-white/60 text-sm flex items-start gap-3">
                <span className="text-[#C9A84C] mt-0.5 font-bold">P:</span>
                <a href="tel:+250783247298" className="hover:text-[#C9A84C] transition-colors">+250 783 247 298</a>
              </li>
              <li className="text-white/60 text-sm flex items-start gap-3">
                <span className="text-[#C9A84C] mt-0.5 font-bold">E:</span>
                <a href="mailto:info@iudevelopers.com" className="hover:text-[#C9A84C] transition-colors">info@iudevelopers.com</a>
              </li>
              <li className="text-white/60 text-sm flex items-start gap-3">
                <span className="text-[#C9A84C] mt-0.5 font-bold">W:</span>
                <a href="https://www.iudevelopers.com" className="hover:text-[#C9A84C] transition-colors">www.iudevelopers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} I&U Developers Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
