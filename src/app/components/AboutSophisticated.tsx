import { motion } from 'motion/react';
import idunnImage from "../../assets/f958c31ca7c9b9737586348ffb52c0f4024fe095.png";

export function AboutSophisticated() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-32 overflow-hidden"
    >
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/30 to-neutral-50" />

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100/15 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-amber-600 to-transparent" />
              <span className="text-sm uppercase tracking-[0.3em] text-amber-800 font-light">
                Um mig
              </span>
            </div>
            <h2
              className="text-6xl md:text-7xl font-light text-stone-900 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}
            >
              Hæ, ég heiti Iðunn
            </h2>
          </motion.div>

          {/* Main content - two column layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* LEFT: Image - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative group">
                {/* Main image container with sophisticated border */}
                <div className="relative overflow-hidden bg-white shadow-2xl border-8 border-white">
                  <div className="aspect-[3/4] overflow-hidden">
                    <motion.img
                      src={idunnImage}
                      alt="Iðunn Garðarsdóttir"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>

                {/* Decorative border accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-300 -z-10" />

                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-600 -translate-x-4 -translate-y-4 opacity-30" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-600 translate-x-4 translate-y-4 opacity-30" />
              </div>
            </motion.div>

            {/* RIGHT: Text content - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Intro paragraph - emphasized */}
              <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-amber-600 shadow-lg">
                <p className="text-2xl text-stone-800 font-light leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ég er íslenskufræðingur og lögfræðingur að mennt með sérstaka reynslu á sviði
                  prófarkalesturs, textagerðar og verkefnastjórnar.
                </p>
              </div>

              {/* Body paragraphs */}
              <div className="space-y-6 text-lg text-stone-700 font-light leading-relaxed">
                <p>
                  Ég hef unnið við fjölbreytt verkefni þar sem nákvæmni, skipulag og góð málnotkun skipta sköpum.
                  Sem íslenskufræðingur hef ég djúpan skilning á íslensku máli og málfari. Ég hef
                  mikla reynslu af prófarkalestri, ritstjórn og textavinnslu fyrir fjölbreyttar
                  stofnanir og fyrirtæki.
                </p>

                <p>
                  Ég tek að mér verkefni af öllum stærðum – allt frá
                  stuttum textum upp í umfangsmiklar ritgerðir og skýrslur.
                </p>

                {/* Divider */}
                <div className="h-[1px] w-24 bg-gradient-to-r from-amber-600 to-transparent my-8" />

                <p>
                  Á árunum 2017-2024 starfaði ég sem aðstoðarmaður ráðherra í þremur ráðuneytum:
                  Heilbrigðisráðuneytinu (2017-2021), Landbúnaðarráðuneytinu (2021-2024) og
                  Innanríkisráðuneytinu (2024). Þar öðlaðist ég víðtæka reynslu af verkefnastjórn,
                  textagerð og samskiptum á öllum stigum stjórnsýslunnar.
                </p>

                <p>
                  Ég lauk BA-gráðu í íslensku frá Háskóla Íslands árið 2013, BA-prófi í lögfræði
                  árið 2015 og meistaraprófi í lögfræði árið 2017. Samhliða námi starfaði ég sem
                  löglærður fulltrúi hjá Juris lögmannsstofu (2015-2017) og sem aðstoðarkennari
                  við Háskóla Íslands (2015-2017).
                </p>

                {/* Interests - highlighted box */}
                <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 border border-amber-200 shadow-md mt-8">
                  <p className="text-stone-800 leading-relaxed">
                    Ég er áhugakona um bókmenntir, tungumál, femínisma og stjórnmál – og auðvitað
                    góða kaffidrykkju. Ég legg áherslu á gæði og áreiðanleika í öllu sem ég tek að mér og
                    er laus til að sinna smærri og stærri verkefnum af fagmennsku.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[1px] w-full max-w-2xl mx-auto mt-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />

        </div>
      </div>
    </section>
  );
}
