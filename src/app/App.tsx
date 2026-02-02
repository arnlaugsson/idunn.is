<<<<<<< Updated upstream
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
=======
import { HeaderSophisticated } from './components/HeaderSophisticated';
import { HeroSophisticated } from './components/HeroSophisticated';
import { ServicesSophisticated } from './components/ServicesSophisticated';
import { AboutSophisticated } from './components/AboutSophisticated';
import { ContactSophisticated } from './components/ContactSophisticated';
import { FooterSophisticated } from './components/FooterSophisticated';
>>>>>>> Stashed changes

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSophisticated />
      <main className="flex-1">
<<<<<<< Updated upstream
        <Hero />
        <Services />
        <About />
        <Contact />
=======
        <HeroSophisticated />
        <ServicesSophisticated />
        <AboutSophisticated />
        <ContactSophisticated />
>>>>>>> Stashed changes
      </main>
      <FooterSophisticated />
    </div>
  );
}