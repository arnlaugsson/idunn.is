import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setIsScrolled((prevIsScrolled) => {
            const nextIsScrolled = window.scrollY > 20;
            return prevIsScrolled === nextIsScrolled ? prevIsScrolled : nextIsScrolled;
          });
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-300/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <a
            href="#"
            onClick={scrollToTop}
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-2xl tracking-tight text-stone-900">Iðunn</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-sm tracking-wide uppercase text-stone-600 hover:text-stone-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded px-2 py-1"
              >
                Þjónusta
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-sm tracking-wide uppercase text-stone-600 hover:text-stone-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded px-2 py-1"
              >
                Um mig
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-sm tracking-wide uppercase text-stone-600 hover:text-stone-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded px-2 py-1"
              >
                Samband
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 border-t border-stone-200">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="block text-sm tracking-wide uppercase text-stone-600 hover:text-stone-900 transition-colors py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded px-2"
                >
                  Þjónusta
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="block text-sm tracking-wide uppercase text-stone-600 hover:text-stone-900 transition-colors py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded px-2"
                >
                  Um mig
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="block text-sm tracking-wide uppercase text-stone-600 hover:text-stone-900 transition-colors py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded px-2"
                >
                  Samband
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
