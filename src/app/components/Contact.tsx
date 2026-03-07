import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const contactItems = [
  {
    icon: Mail,
    label: 'Netfang',
    value: 'idunng@gmail.com',
    href: 'mailto:idunng@gmail.com',
  },
  {
    icon: Phone,
    label: 'Sími',
    value: '663 3617',
    href: 'tel:+3546633617',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Skoða prófíl',
    href: 'https://www.linkedin.com/in/idunng/',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Staðsetning',
    value: 'Reykjavík, Ísland',
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-4">
              Samband
            </p>
            <h2
              className="text-4xl md:text-5xl text-stone-900 mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Hafðu samband
            </h2>
            <div className="w-16 h-px bg-amber-700 mx-auto mb-8" />
            <p className="text-stone-600 max-w-xl mx-auto leading-relaxed">
              Ég er laus til að ræða verkefni og hvernig ég get aðstoðað þig.
              Hafðu samband fyrir frekari upplýsingar – eða bara til að spekúlera yfir kaffibolla!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-amber-700 mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">
                  {item.label}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-stone-900 hover:text-amber-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-stone-600">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
