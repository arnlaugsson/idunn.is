import { Scale, BookOpen, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const services = [
  {
    icon: BookOpen,
    title: 'Prófarkalestur og ritstjórn',
    subtitle: 'Nákvæmni í hverri línu',
    description: 'Ítarleg reynsla af prófarkalestri og ritstjórn. Íslenskufræðingur að mennt með djúpan skilning á íslensku máli og málfari.',
    skills: ['Prófarkalestur', 'Ritstjórn', 'Málfarsleiðrétting', 'Textavinnsla'],
    color: 'from-amber-50 to-amber-100',
    accentColor: 'bg-amber-600',
    iconBgColor: 'bg-amber-100',
    iconColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-900'
  },
  {
    icon: FileText,
    title: 'Textagerð og verkefnastjórn',
    subtitle: 'Sköpun með tilgangi',
    description: 'Reynsla af fjölbreyttum textaverkefnum og verkefnastjórn. Skipulagning, framkvæmd og eftirlit með verkefnum af mismunandi umfangi.',
    skills: ['Textagerð', 'Verkefnastjórn', 'Samfélagsmiðlaráðgjöf', 'Skipulagning', 'Samskipti'],
    color: 'from-rose-50 to-rose-100',
    accentColor: 'bg-rose-600',
    iconBgColor: 'bg-rose-100',
    iconColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-900'
  },
  {
    icon: Scale,
    title: 'Lögfræðingur',
    subtitle: 'Sérfræðiþekking í opinberri stjórnsýslu',
    description: 'Sérstaða í opinberri stjórnsýslu. Reynsla af fjölbreyttum málaflokkum og verkefnum í opinberum rekstri.',
    skills: ['Opinber stjórnsýsla', 'Verkefnastjórn'],
    color: 'from-slate-50 to-slate-100',
    accentColor: 'bg-slate-700',
    iconBgColor: 'bg-slate-100',
    iconColor: 'text-slate-700',
    borderColor: 'border-slate-200',
    textColor: 'text-slate-900'
  }
];

export function ServicesSophisticated() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative scroll-mt-20 py-32 overflow-hidden">
      {/* Elegant background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-stone-50 to-amber-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-100/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-amber-600 to-transparent" />
            <span className="text-sm uppercase tracking-[0.3em] text-amber-800 font-light">
              Þjónusta
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-stone-900 mb-6 leading-[0.95]" style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}>
            Sérfræði&shy;þekking<br />
            <span className="italic text-amber-800">með áhrifum</span>
          </h2>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
            Heildstæð nálgun við tungumál, texta og lögfræði — þar sem nákvæmni mætir sköpunarkrafti.
          </p>
        </motion.div>

        {/* Services grid with staggered layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group ${index === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Card background with sophisticated border */}
              <div className={`
                relative h-full p-8 lg:p-10
                bg-white/80 backdrop-blur-sm
                border-2 ${service.borderColor}
                transition-all duration-500
                ${hoveredIndex === index ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}
              `}>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-20 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-40' : ''}`} />

                {/* Icon with elegant styling */}
                <motion.div
                  className={`
                    relative mb-8 inline-flex items-center justify-center
                    w-16 h-16 rounded-full
                    ${service.iconBgColor}
                    transition-all duration-500
                    ${hoveredIndex === index ? 'scale-110' : ''}
                  `}
                  animate={hoveredIndex === index ? { rotate: [0, -5, 5, 0] } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                </motion.div>

                {/* Service title with editorial typography */}
                <h3
                  className={`text-3xl font-light mb-2 ${service.textColor} leading-tight`}
                  style={{ fontFamily: "'Cormorant Garamond', 'Crimson Text', serif" }}
                >
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm uppercase tracking-wider text-stone-600 mb-6 font-light">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-stone-600 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Decorative divider */}
                <div className={`h-[1px] w-12 ${service.accentColor} mb-6 transition-all duration-500 ${hoveredIndex === index ? 'w-20' : ''}`} />

                {/* Skills list with elegant styling */}
                <ul className="space-y-3">
                  {service.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      className="flex items-center text-stone-700 font-light"
                    >
                      <span className={`mr-3 w-1 h-1 ${service.accentColor} rounded-full`} />
                      <span className="text-sm tracking-wide">{skill}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <motion.div
                  className={`absolute inset-0 border-2 ${service.borderColor} pointer-events-none`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
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
    </section>
  );
}
