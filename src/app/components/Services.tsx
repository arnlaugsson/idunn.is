import { BookOpen, FileText } from 'lucide-react';

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
    <section id="services" className="scroll-mt-20 py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-900">
          Þjónusta
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-6 inline-block p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg">
                <service.icon className="w-8 h-8 text-rose-700" />
              </div>
              <h3 className="mb-6 text-gray-900">{service.title}</h3>
              <ul className="space-y-3">
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