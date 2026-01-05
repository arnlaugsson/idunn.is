import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false); // Close menu after navigation
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-rose-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <a
            href="#"
            onClick={scrollToTop}
            className="text-rose-700 hover:text-rose-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded"
          >
            <h1>Iðunn.is</h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-gray-700 hover:text-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded px-2 py-1"
              >
                Um mig
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-gray-700 hover:text-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded px-2 py-1"
              >
                Þjónusta
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, 'testimonials')}
                className="text-gray-700 hover:text-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded px-2 py-1"
              >
                Ummæli
              </a>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden md:inline-block bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
          >
            Hafðu samband
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-rose-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-rose-100">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="block text-gray-700 hover:text-rose-600 transition-colors py-2"
                >
                  Um mig
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="block text-gray-700 hover:text-rose-600 transition-colors py-2"
                >
                  Þjónusta
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, 'testimonials')}
                  className="block text-gray-700 hover:text-rose-600 transition-colors py-2"
                >
                  Ummæli
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="block bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors text-center"
                >
                  Hafðu samband
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
