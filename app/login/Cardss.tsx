"use client"

import React, { useState } from 'react'
import { ShoppingCart, CreditCard, CheckCircle2, X, Star } from 'lucide-react'

interface Car {
  id: number
  name: string
  type: string
  image: string
  price: number
  description: string
}

const cars: Car[] = [
  {
    id: 1,
    name: "Rolls-Royce Phantom",
    type: "The Ultimate Luxury",
    image: "https://i.ytimg.com/vi/eQcvcnAlxTs/maxresdefault.jpg",
    price: 460000,
    description: "Dunyodagi eng hashamatli sedan. Shovqinsiz va mukammal."
  },
  {
    id: 2,
    name: "Rolls-Royce Ghost",
    type: "Post-Opulent",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000",
    price: 340000,
    description: "Minimalistik dizayn va texnologik ustunlik uyg'unligi."
  },
  {
    id: 3,
    name: "Rolls-Royce Cullinan",
    type: "Luxury SUV",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1000",
    price: 330000,
    description: "Cheksiz quvvat va har qanday yo'lda yuqori darajadagi hashamat."
  },
  {
    id: 4,
    name: "Rolls-Royce Wraith",
    type: "Grand Tourer",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/2159521/c1c6186aca1002efd1b5222e3cdbc29b/1200x900",
    price: 450000,
    description: "Klassik stil va modern texnologiyalar birga."
  },
  {
    id: 5,
    name: "Rolls-Royce Dawn",
    type: "Luxury Convertible",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/11372349/d58ea315ec56eea6b0854ded57cd871e/1200x900",
    price: 380000,
    description: "Ochiq havoda hashamat va quvvatning mukammal uyg'unligi."
  },
  {
    id: 6,
    name: "Rolls-Royce Spectre",
    type: "Electric Luxury",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/2156415/e62bf8c541f348237a49b10c1577d047/584x438",
    price: 500000,
    description: "Elektr quvvat bilan hashamatning yangi davri."
  }

]

export default function Cardss() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [step, setStep] = useState<'checkout' | 'success' | null>(null)

  return (
    <div id="inventory-section" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map(car => (
          <div key={car.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span className="text-[10px] font-bold">PREMIUM</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-2">{car.type}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{car.name}</h3>
              <p className="text-gray-500 text-sm mb-8">{car.description}</p>
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-gray-50">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-semibold">Narxi</p>
                  <p className="text-xl font-extrabold text-gray-900">${car.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => { setSelectedCar(car); setStep('checkout') }}
                  className="p-4 bg-gray-900 text-white rounded-2xl hover:bg-indigo-600 transition-all active:scale-90 shadow-lg"
                >
                  <ShoppingCart size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      {step && selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button onClick={() => { setStep(null); setSelectedCar(null) }} className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors">
              <X size={28} />
            </button>

            {step === 'checkout' ? (
              <div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Sotib olishni tasdiqlang</h2>
                </div>
                <div className="bg-gray-50 rounded-[2rem] p-6 mb-8 border border-gray-100">
                  <div className="flex justify-between mb-3 text-gray-600">
                    <span>Model:</span>
                    <span className="font-bold text-gray-900">{selectedCar.name}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium text-sm mb-4">
                    <span>Etkazib berish:</span>
                    <span>BEPUL (VIP)</span>
                  </div>
                  <div className="h-px bg-gray-200 my-4" />
                  <div className="flex justify-between text-2xl font-black text-gray-900">
                    <span>Jami:</span>
                    <span>${selectedCar.price.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => setStep('success')}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
                >
                  To'lovni tasdiqlash
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">Tabriklaymiz!</h2>
                <p className="text-gray-500 mb-10 leading-relaxed">Sizning buyurtmangiz muvaffaqiyatli qabul qilindi. Shaxsiy menejeringiz tez orada bog'lanadi.</p>
                <button
                  onClick={() => { setStep(null); setSelectedCar(null) }}
                  className="w-full py-5 bg-gray-100 text-gray-900 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                >
                  Yopish
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}