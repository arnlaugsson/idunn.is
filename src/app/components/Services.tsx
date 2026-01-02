import { Scale, BookOpen, FileText } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Prófarkalestur og ritstjórn',
    description: 'Ítarleg reynsla af prófarkalestri og ritstjórn. Íslenskufræðingur að mennt með djúpan skilning á íslensku máli og málfari.',
    skills: ['Prófarkalestur', 'Ritstjórn', 'Málfarsleiðrétting', 'Textavinnsla']
  },
  {
    icon: FileText,
    title: 'Textagerð og verkefnastjórn',
    description: 'Reynsla af fjölbreyttum textaverkefnum og verkefnastjórn. Skipulagning, framkvæmd og eftirlit með verkefnum af mismunandi umfangi.',
    skills: ['Textagerð', 'Verkefnastjórn', 'Samfélagsmiðlaráðgjöf', 'Skipulagning', 'Samskipti']
  },
  {
    icon: Scale,
    title: 'Lögfræðingur',
    description: 'Sérstaða í opinberri stjórnsýslu. Reynsla af fjölbreyttum málaflokkum og verkefnum í opinberum rekstri.',
    skills: ['Opinber stjórnsýsla', 'Verkefnastjórn']
  }
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-900">
          Þjónusta
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              <div className="mb-6 inline-block p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg">
                <service.icon className="w-8 h-8 text-rose-700" />
              </div>
              <h3 className="mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}