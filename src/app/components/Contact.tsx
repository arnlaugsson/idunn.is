import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            Hafðu samband
          </h2>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-12 rounded-lg shadow-lg border border-rose-100">
            <p className="text-lg text-gray-700 text-center mb-8">
              Ég er laus til að ræða verkefni og hvernig ég get aðstoðað þig. 
              Hafðu samband fyrir frekari upplýsingar – eða bara til að spekúlera yfir kaffibolla!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-rose-100">
                <div className="mb-4 p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
                  <Mail className="w-6 h-6 text-rose-700" />
                </div>
                <h4 className="mb-2 text-gray-900">Netfang</h4>
                <a 
                  href="mailto:idunng@gmail.com" 
                  className="text-rose-700 hover:text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded px-2 py-1"
                >
                  idunng@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-rose-100">
                <div className="mb-4 p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
                  <Phone className="w-6 h-6 text-rose-700" />
                </div>
                <h4 className="mb-2 text-gray-900">Sími</h4>
                <a 
                  href="tel:+3546633617" 
                  className="text-rose-700 hover:text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded px-2 py-1"
                >
                  663 3617
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-rose-100">
                <div className="mb-4 p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
                  <Linkedin className="w-6 h-6 text-rose-700" />
                </div>
                <h4 className="mb-2 text-gray-900">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/idunng/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-700 hover:text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded px-2 py-1"
                >
                  Skoða prófíl
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-rose-100">
                <div className="mb-4 p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-700" />
                </div>
                <h4 className="mb-2 text-gray-900">Staðsetning</h4>
                <p className="text-gray-600">Reykjavík, Ísland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}