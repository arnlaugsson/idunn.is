import { BookOpen, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: BookOpen,
    title: 'Prófarkalestur',
    skills: ['Málfarsráðgjöf', 'Yfirlestur', 'Leiðrétting texta']
  },
  {
    icon: FileText,
    title: 'Textagerð',
    skills: ['Ráðgjöf við greina- og skýrsluskrif', 'Textaskrif að beiðni viðskiptavinar']
  }
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 md:py-32 bg-white">
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
              Þjónusta
            </p>
            <h2
              className="text-4xl md:text-5xl text-emerald-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Hvað get ég gert fyrir þig?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-8 md:p-10 border border-emerald-200 hover:border-emerald-400 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="mb-6">
                  <service.icon className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-2xl mb-6 text-emerald-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-emerald-700">
                      <span className="mt-2 w-1 h-1 bg-emerald-600 rounded-full shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
