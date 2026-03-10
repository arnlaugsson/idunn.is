import { motion } from "motion/react";

export function Hero() {
  const scrollToContact = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-sm tracking-[0.3em] uppercase text-emerald-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            prófarkalestur &mdash; textagerð
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl mb-8 text-emerald-900 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Iðunn Garðarsdóttir
          </motion.h1>

          <motion.div
            className="w-16 h-px bg-emerald-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.p
            className="text-lg md:text-xl text-emerald-700 leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Prófarkalestur, textagerð og verkefnastjórn.
            Íslenskufræðingur og lögfræðingur með reynslu af
            fjölbreyttum verkefnum.
          </motion.p>

          <motion.a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block border border-emerald-800 text-emerald-900 px-8 py-3 text-sm tracking-wide uppercase hover:bg-emerald-800 hover:text-emerald-50 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Hafðu samband
          </motion.a>
        </div>
      </div>
    </section>
  );
}
