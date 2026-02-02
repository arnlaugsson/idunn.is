import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Netfang',
    value: 'idunng@gmail.com',
    href: 'mailto:idunng@gmail.com',
    iconBgColor: 'bg-amber-100',
    iconColor: 'text-amber-700',
    accentColor: 'from-amber-600 to-amber-700'
  },
  {
    icon: Phone,
    label: 'Sími',
    value: '663 3617',
    href: 'tel:+3546633617',
    iconBgColor: 'bg-rose-100',
    iconColor: 'text-rose-700',
    accentColor: 'from-rose-600 to-rose-700'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Skoða prófíl',
    href: 'https://www.linkedin.com/in/idunng/',
    target: '_blank',
    rel: 'noopener noreferrer',
    iconBgColor: 'bg-slate-100',
    iconColor: 'text-slate-700',
    accentColor: 'from-slate-600 to-slate-700'
  }
];

export function ContactSophisticated() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-32 overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-amber-50/20 to-stone-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-100/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-600" />
              <span className="text-sm uppercase tracking-[0.3em] text-amber-800 font-light">
                Samband
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-600" />
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}
            >
              Hafðu samband
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Ég er laus til að ræða verkefni og hvernig ég get aðstoðað þig.
              <br />
              Hafðu samband fyrir frekari upplýsingar — eða bara til að spekúlera yfir kaffibolla!
            </motion.p>
          </motion.div>

          {/* Contact cards grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="
                  relative h-full p-8 bg-white/80 backdrop-blur-sm
                  border border-stone-200
                  transition-all duration-500
                  hover:shadow-xl hover:-translate-y-1
                ">
                  {/* Icon */}
                  <motion.div
                    className={`
                      mb-6 inline-flex items-center justify-center
                      w-14 h-14 rounded-full
                      ${method.iconBgColor}
                      transition-all duration-500
                    `}
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <method.icon className={`w-6 h-6 ${method.iconColor}`} strokeWidth={1.5} />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-sm uppercase tracking-wider text-stone-600 mb-3 font-light">
                    {method.label}
                  </h3>

                  {/* Value/Link */}
                  {method.href ? (
                    <a
                      href={method.href}
                      {...(method.target && { target: method.target })}
                      {...(method.rel && { rel: method.rel })}
                      className="
                        text-stone-800 font-light hover:text-amber-700
                        transition-colors duration-300
                        focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded
                        block
                      "
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-stone-700 font-light">{method.value}</p>
                  )}

                  {/* Decorative accent line */}
                  <div className={`
                    absolute bottom-0 left-0 h-1 w-0
                    bg-gradient-to-r ${method.accentColor}
                    transition-all duration-500
                    group-hover:w-full
                  `} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative bottom element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[1px] w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
