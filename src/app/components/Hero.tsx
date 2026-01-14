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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-peach-50">
      {/* Abstract gradient shapes with Motion animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ filter: 'blur(2px)' }}>
        {/* Large floating orbs - VERY OBVIOUS ANIMATIONS */}
        <motion.div
          className="absolute -m-48 w-96 h-96 bg-gradient-to-br from-rose-300/50 to-pink-400/40 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [-100, 300, 600, 200, -100],
            y: [-100, 200, -50, 400, -100],
            scale: [1, 1.3, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -m-48 w-96 h-96 bg-gradient-to-br from-pink-300/50 to-rose-400/40 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [
              window.innerWidth,
              400,
              -200,
              700,
              window.innerWidth,
            ],
            y: [600, -100, 300, 500, 600],
            scale: [1, 0.8, 1.4, 1.1, 1],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -m-48 w-[500px] h-[500px] bg-gradient-to-br from-peach-300/30 to-pink-300/30 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [200, 800, -100, 500, 200],
            y: [100, 500, 200, -50, 100],
            scale: [1, 1.5, 0.8, 1.2, 1],
            rotate: [0, 270, 180, 90, 360],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Additional breathing orbs */}
        <motion.div
          className="absolute -m-32 w-64 h-64 bg-gradient-to-br from-rose-400/30 to-peach-300/25 rounded-full blur-2xl"
          animate={{
            x: [400, -150, 600, 100, 400],
            y: [-100, 400, 100, -50, -100],
            scale: [1, 1.4, 0.9, 1.3, 1],
            opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -m-40 w-80 h-80 bg-gradient-to-br from-pink-400/25 to-rose-300/30 rounded-full blur-3xl"
          animate={{
            x: [700, 100, 500, -100, 700],
            y: [300, -100, 500, 200, 300],
            scale: [1, 0.8, 1.5, 1.1, 1],
            opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small floating particles */}
        <motion.div
          className="absolute -m-16 w-32 h-32 bg-gradient-to-br from-rose-500/40 to-pink-400/35 rounded-full blur-xl"
          animate={{
            x: [-50, 500, 800, 200, -50],
            y: [200, -50, 400, 600, 200],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute -m-20 w-40 h-40 bg-gradient-to-br from-peach-400/35 to-rose-400/30 rounded-full blur-xl"
          animate={{
            x: [600, -100, 400, 900, 600],
            y: [500, 100, -50, 300, 500],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute -m-12 w-24 h-24 bg-gradient-to-br from-pink-500/45 to-rose-400/40 rounded-full blur-lg"
          animate={{
            x: [300, 700, -100, 500, 300],
            y: [400, 0, 500, 100, 400],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Extra wandering particles */}
        <motion.div
          className="absolute -m-24 w-48 h-48 bg-gradient-to-br from-rose-300/35 to-pink-300/30 rounded-full blur-2xl"
          animate={{
            x: [100, 600, 200, 800, 100],
            y: [-50, 300, 600, 100, -50],
            scale: [1, 1.2, 0.9, 1.4, 1],
          }}
          transition={{
            duration: 75,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative Pilcrow symbols (¶) - floating in background */}
        <motion.div
          className="absolute text-9xl text-rose-300/20 select-none"
          animate={{
            x: [100, 400, 200, 600, 100],
            y: [50, 300, 500, 150, 50],
            rotate: [0, 15, -10, 20, 0],
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ¶
        </motion.div>

        <motion.div
          className="absolute text-8xl text-pink-400/15 select-none"
          animate={{
            x: [800, 300, 600, 100, 800],
            y: [400, 100, 300, 500, 400],
            rotate: [0, -20, 10, -15, 0],
          }}
          transition={{
            duration: 85,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ¶
        </motion.div>

        <motion.div
          className="absolute text-7xl text-rose-400/10 select-none"
          animate={{
            x: [400, 700, 200, 500, 400],
            y: [200, 500, 100, 400, 200],
            rotate: [0, 25, -5, 15, 0],
          }}
          transition={{
            duration: 95,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ¶
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-rose-100">
            <p className="text-rose-700">
              prófarkalestur | textagerð
            </p>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Iðunn Garðarsdóttir
          </h1>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-700">
              Prófarkalestur, textagerð og verkefnastjórn.
              Íslenskufræðingur og lögfræðingur með reynslu af
              fjölbreyttum verkefnum.
              <motion.span
                className="inline-block w-0.5 h-6 md:h-7 bg-rose-600 ml-1 align-middle"
                animate={{
                  opacity: [1, 1, 0, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  times: [0, 0.5, 0.5, 1],
                }}
              />
            </p>
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block bg-rose-600 text-white px-8 py-4 rounded-lg hover:bg-rose-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Hafðu samband
          </a>
        </div>
      </div>
    </section>
  );
}