import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  forceScrolled?: boolean;
}

export function Navbar({ forceScrolled = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    if (forceScrolled) { setIsScrolled(true); return; }
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Investor Gateway", href: "/investor-gateway" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/97 backdrop-blur-md border-b border-[#1B3558]/10 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="I&U Developers Ltd"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A84C] after:transition-all after:duration-300 ${
                    isActive(link.href)
                      ? "text-[#C9A84C] after:w-full"
                      : isScrolled
                      ? "text-[#1B3558] hover:text-[#C9A84C] after:w-0 hover:after:w-full"
                      : "text-white hover:text-[#C9A84C] after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`flex items-center gap-3 ml-4 pl-4 ${isScrolled ? "border-l border-[#1B3558]/15" : "border-l border-white/20"}`}>
            <Link
              href="/contact"
              className={`text-sm font-semibold px-5 py-2 rounded-md border transition-all duration-200 ${
                isScrolled
                  ? "border-[#1B3558] text-[#1B3558] hover:bg-[#1B3558] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1B3558]"
              }`}
            >
              Get Quote
            </Link>
            <Link
              href="/investor-gateway"
              className="text-sm font-semibold px-5 py-2 rounded-md bg-[#C9A84C] text-[#1B3558] hover:bg-[#B8960A] transition-all duration-200 shadow-sm"
            >
              Partner With Us
            </Link>
          </div>
        </nav>

        <button
          className={`md:hidden p-2 ${isScrolled ? "text-[#1B3558]" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#1B3558]/10 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium transition-colors ${
                        isActive(link.href) ? "text-[#C9A84C]" : "text-[#1B3558] hover:text-[#C9A84C]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#1B3558]/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-semibold px-5 py-3 rounded-md border border-[#1B3558] text-[#1B3558] hover:bg-[#1B3558] hover:text-white transition-all"
                >
                  Get Quote
                </Link>
                <Link
                  href="/investor-gateway"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-semibold px-5 py-3 rounded-md bg-[#C9A84C] text-[#1B3558] hover:bg-[#B8960A] transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
