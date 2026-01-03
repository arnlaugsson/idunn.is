import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Iðunn er afkastamikil og áreiðanleg. Hún skilaði prófarkalestur á skýrslu okkar fyrir tímann og með ítarlegum athugasemdum sem bættu textann verulega.",
      name: "Nafn 1",
      role: "Starfsheiti, Fyrirtæki/Stofnun",
    },
    {
      quote: "Ég hef unnið með Iðunni í mörg ár og hef alltaf verið mjög ánægð með þjónustu hennar. Hún er fagleg, nákvæm og mjög fljót að svara.",
      name: "Nafn 2",
      role: "Starfsheiti, Fyrirtæki/Stofnun",
    },
    {
      quote: "Frábær þjónusta! Iðunn hefur mikla reynslu og djúpan skilning á íslensku máli. Henni má treysta fyrir erfiðustu verkefnin.",
      name: "Nafn 3",
      role: "Starfsheiti, Fyrirtæki/Stofnun",
    },
  ];

  return (
    <section id="testimonials" className="scroll-mt-20 py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Ummæli
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hvað segja viðskiptavinir mínir
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <Quote className="text-rose-600 flex-shrink-0" size={32} />
                </div>

                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-rose-100 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
