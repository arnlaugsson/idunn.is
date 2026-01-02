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
                Ég er íslenskufræðingur og lögfræðingur að mennt með sérstaka reynslu á sviði 
                prófarkalesturs, textagerðar og verkefnastjórnar. Ég hef unnið við fjölbreytt 
                verkefni þar sem nákvæmni, skipulag og góð málnotkun skipta sköpum.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Sem íslenskufræðingur hef ég djúpan skilning á íslensku máli og málfari. Ég hef 
                mikla reynslu af prófarkalestri, ritstjórn og textavinnslu fyrir fjölbreyttar 
                stofnanir og fyrirtæki. Ég tek að mér verkefni af öllum stærðum – allt frá 
                stuttum textum upp í umfangsmiklar ritgerðir og skýrslur.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Á árunum 2017-2024 starfaði ég sem aðstoðarmaður ráðherra í þremur ráðuneytum: 
                Heilbrigðisráðuneytinu (2017-2021), Landbúnaðarráðuneytinu (2021-2024) og 
                Innanríkisráðuneytinu (2024). Þar öðlaðist ég víðtæka reynslu af verkefnastjórn, 
                textagerð og samskiptum á öllum stigum stjórnsýslunnar.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Ég lauk BA-gráðu í íslensku frá Háskóla Íslands árið 2013, BA-prófi í lögfræði 
                árið 2015 og meistaraprófi í lögfræði árið 2017. Samhliða námi starfaði ég sem 
                löglærður fulltrúi hjá Juris lögmannsstofu (2015-2017) og sem aðstoðarkennari 
                við Háskóla Íslands (2015-2017).
              </p>
              
              <p className="text-lg text-gray-700">
                Ég er áhugakona um bókmenntir, tungumál, femínisma og stjórnmál – og auðvitað 
                góða kaffidrykkju. Ég legg áherslu á gæði og áreiðanleika í öllu sem ég tek að mér og 
                er laus til að sinna smærri og stærri verkefnum af fagmennsku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}