import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}