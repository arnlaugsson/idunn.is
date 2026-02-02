import { motion } from "motion/react";
import { ChevronDown } from 'lucide-react';

export function HeroSophisticated() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sophisticated gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100" />

      {/* Subtle animated orbs - refined and minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Decorative elements - geometric shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          className="absolute top-40 left-10 w-1 h-32 bg-amber-600"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-1 bg-amber-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Tagline with elegant styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-600" />
            <p className="text-sm uppercase tracking-[0.3em] text-amber-800 font-light">
              prófarkalestur · textagerð · lögfræði
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-600" />
          </motion.div>

          {/* Main heading with dramatic typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl text-center mb-8 text-stone-900 font-light leading-[0.9]"
            style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}
          >
            Iðunn
            <br />
            <span className="italic text-amber-800">Garðarsdóttir</span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-12"
          />

          {/* Description with refined typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-xl md:text-2xl text-stone-700 font-light leading-relaxed mb-2">
              Prófarkalestur, textagerð og verkefnastjórn.
            </p>
            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
              Íslenskufræðingur og lögfræðingur með reynslu af fjölbreyttum verkefnum.
            </p>
          </motion.div>

          {/* CTA Button with sophisticated styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center mb-32"
          >
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                group relative inline-flex items-center px-10 py-4 overflow-hidden
                bg-gradient-to-r from-amber-700 to-amber-800
                text-white text-sm uppercase tracking-[0.2em] font-light
                transition-all duration-500
                shadow-xl hover:shadow-2xl
                focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-4
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-800 before:to-amber-900
                before:translate-x-[-100%] before:transition-transform before:duration-500
                hover:before:translate-x-0
              "
            >
              <span className="relative z-10">Hafðu samband</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={scrollToServices}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors cursor-pointer group focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
            aria-label="Scroll to services"
          >
            <span className="text-xs uppercase tracking-widest font-light">Skoða meira</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={20} strokeWidth={1.5} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
    </section>
  );
}
