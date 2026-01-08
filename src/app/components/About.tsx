import idunnImage from "../../assets/f958c31ca7c9b9737586348ffb52c0f4024fe095.png";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            Um mig
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-rose-100">
                <img 
                  src={idunnImage} 
                  alt="Iðunn Garðarsdóttir"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-10 rounded-lg shadow-lg border border-rose-100">
              <p className="text-lg text-gray-700 mb-6">
                Ég er íslenskufræðingur og lögfræðingur. Ég hef reynslu af fjölbreyttum verkefnum á sviði prófarkalesturs, ritstjórnar og textagerðar og tek að mér prófarkalestur og tengd verkefni af öllum stærðum og gerðum. 
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Ég lauk BA-gráðu í íslensku frá Háskóla Íslands árið 2013, BA-prófi í lögfræði árið 2015 og meistaraprófi í lögfræði árið 2017. Samhliða námi starfaði ég sem prófarkalesari á Fréttablaðinu og síðar sem löglærður fulltrúi hjá Juris lögmannsstofu (2015-2017). Á árunum 2017-2024 starfaði ég sem aðstoðarmaður ráðherra í þremur ráðuneytum; heilbrigðisráðuneytinu (2017-2021), matvælaráðuneytinu (2021-2024) og innviðaráðuneytinu (2024). 
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Í störfum mínum hef ég öðlast dýrmæta reynslu af textagerð, prófarkalestri, verkefnastjórnun og fjölbreyttum lögfræðilegum verkefnum. 
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Ég er áhugakona um bókmenntir, tungumál, femínisma og stjórnmál og góða kaffidrykkju. Ég legg áherslu á gæði og nákvæmni í öllu sem ég tek mér fyrir hendur. Ef þú vilt vita meira, ekki hika við að hafa samband. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
