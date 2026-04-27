import Hero from './Hero'
import Cardss from './login/Cardss'
import Navbar from './Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-50 border border-gray-100 rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-sm">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight italic font-serif">
                Dunyo Standardi: <br />
                <span className="text-indigo-600">Rolls-Royce Merosi</span>
              </h2>
              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Asrdan ko'proq vaqt davomida Rolls-Royce muvaffaqiyat, hashamat va muhandislik mukammalligining yakuniy ramzi bo'lib kelmoqda.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-3xl font-bold text-gray-800">1904</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Asos solingan</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-3xl font-bold text-gray-800">Qo'l mehnati</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Sifat kafolati</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Innovatsiya va Kelajak</h3>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                "Har bir ishda mukammallikka intiling. Bor narsaning eng yaxshisini oling va uni yanada yaxshilang."
              </p>
              <p className="mt-4 text-right font-bold text-indigo-600">— Sir Henry Royce</p>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 sm:text-5xl">
            Hozirgi Masterpisslar
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-xl italic font-serif">
            Yaratilgan eng sara avtomobillarning saralangan to'plamini o'rganing.
          </p>
        </div>

        <Cardss />
      </section>


      <footer className="mt-32 border-t border-gray-100 py-16 text-center">
        <p className="text-gray-400 font-medium tracking-widest">
          &copy; 2026 ROLLS-ROYCE MOTOR CARS. BARCHA HUQUQLAR HIMOAYALANGAN.
        </p>
      </footer>
    </main>
  )
}