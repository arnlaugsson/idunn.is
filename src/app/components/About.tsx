import { motion } from 'motion/react';
import idunnImage from "../../assets/f958c31ca7c9b9737586348ffb52c0f4024fe095.png";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-emerald-400 mb-4">
              Um mig
            </p>
            <h2
              className="text-4xl md:text-5xl text-emerald-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Iðunn Garðarsdóttir
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Image */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden">
                <img
                  src={idunnImage}
                  alt="Iðunn Garðarsdóttir"
                  className="w-full h-auto object-cover grayscale-[20%]"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="space-y-6 text-emerald-700 leading-relaxed">
                <p>
                  Ég er íslenskufræðingur og lögfræðingur. Ég hef reynslu af fjölbreyttum verkefnum á sviði prófarkalesturs, ritstjórnar og textagerðar og tek að mér prófarkalestur og tengd verkefni af öllum stærðum og gerðum.
                </p>

                <p>
                  Ég lauk BA-gráðu í íslensku frá Háskóla Íslands árið 2013, BA-prófi í lögfræði árið 2015 og meistaraprófi í lögfræði árið 2017. Samhliða námi starfaði ég sem prófarkalesari á Fréttablaðinu og síðar sem löglærður fulltrúi hjá Juris lögmannsstofu (2015-2017). Á árunum 2017-2024 starfaði ég sem aðstoðarmaður ráðherra í þremur ráðuneytum; heilbrigðisráðuneytinu (2017-2021), matvælaráðuneytinu (2021-2024) og innviðaráðuneytinu (2024).
                </p>

                <p>
                  Í störfum mínum hef ég öðlast dýrmæta reynslu af textagerð, prófarkalestri, verkefnastjórnun og fjölbreyttum lögfræðilegum verkefnum.
                </p>

                <p>
                  Mín helstu áhugamál eru bókmenntir, tungumál, femínismi, stjórnmál og kaffidrykkja. Ég legg áherslu á gæði og nákvæmni í öllu sem ég tek mér fyrir hendur. Ef þú vilt vita meira, ekki hika við að hafa samband.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
