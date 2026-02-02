import { motion } from 'motion/react';

export function FooterSophisticated() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-stone-900 to-stone-950 text-stone-100 py-16 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-rose-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-stone-900 rounded mb-6"
            >
              <h2
                className="text-4xl md:text-5xl font-light text-stone-100 mb-2 transition-colors group-hover:text-amber-500"
                style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}
              >
                Iðunn<span className="text-amber-600">.</span>
              </h2>
            </motion.button>

            <div className="flex items-center justify-center gap-3 text-stone-300 text-sm">
              <span className="uppercase tracking-wider font-light">prófarkalestur</span>
              <span className="w-1 h-1 bg-amber-600 rounded-full" />
              <span className="uppercase tracking-wider font-light">textagerð</span>
              <span className="w-1 h-1 bg-amber-600 rounded-full" />
              <span className="uppercase tracking-wider font-light">lögfræði</span>
            </div>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mb-12"
          />

          {/* Copyright and info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center space-y-4"
          >
            <p className="text-stone-300 text-sm font-light">
              © {new Date().getFullYear()} Iðunn Garðarsdóttir
            </p>
            <p className="text-stone-400 text-xs font-light tracking-wide">
              Öll réttindi áskilin
            </p>
          </motion.div>

          {/* Decorative bottom element */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-amber-600/50" />
              <div className="w-1 h-1 bg-amber-600 rounded-full" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-amber-600/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
