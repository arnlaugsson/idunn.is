import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function HeaderSophisticated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-stone-200'
          : 'bg-transparent border-b border-white/10'}
      `}
    >
      <div className="container mx-auto px-4 py-5">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={scrollToTop}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
          >
            <h1
              className={`
                text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300
                ${scrolled ? 'text-stone-900' : 'text-stone-900'}
              `}
              style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}
            >
              Iðunn
              <span className={`text-amber-700 transition-colors duration-300`}>.</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-600 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={`
                relative text-sm uppercase tracking-widest font-light transition-colors duration-300
                ${scrolled ? 'text-stone-700 hover:text-amber-700' : 'text-stone-800 hover:text-amber-700'}
                focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded px-2 py-1
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-600
                after:transition-all after:duration-300 hover:after:w-full
              `}
            >
              Þjónusta
            </a>

            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`
                relative text-sm uppercase tracking-widest font-light transition-colors duration-300
                ${scrolled ? 'text-stone-700 hover:text-amber-700' : 'text-stone-800 hover:text-amber-700'}
                focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded px-2 py-1
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-600
                after:transition-all after:duration-300 hover:after:w-full
              `}
            >
              Um mig
            </a>

            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative px-6 py-2.5 overflow-hidden
                bg-gradient-to-r from-amber-700 to-amber-800
                text-white text-sm uppercase tracking-widest font-light
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-800 before:to-amber-900
                before:translate-y-full before:transition-transform before:duration-300
                hover:before:translate-y-0
              "
            >
              <span className="relative z-10">Hafðu samband</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className={`
              md:hidden p-2 transition-colors duration-300
              ${scrolled ? 'text-stone-700 hover:text-amber-700' : 'text-stone-800 hover:text-amber-700'}
            `}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-6 pt-6 border-t border-stone-200 overflow-hidden"
            >
              <ul className="flex flex-col space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="block text-center py-3 text-stone-700 hover:text-amber-700 transition-colors uppercase tracking-widest text-sm"
                  >
                    Þjónusta
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, 'about')}
                    className="block text-center py-3 text-stone-700 hover:text-amber-700 transition-colors uppercase tracking-widest text-sm"
                  >
                    Um mig
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-3 text-center transition-all uppercase tracking-widest text-sm hover:shadow-lg"
                  >
                    Hafðu samband
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
