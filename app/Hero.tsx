"use client";

import React from 'react';

export default function Hero() {
  const scrollToCars = () => {
    const element = document.getElementById('inventory-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden rounded-[3rem] p-8 lg:p-20 shadow-2xl mt-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold sm:text-6xl leading-tight">
            <span className="block text-indigo-400">Kelajak Texnologiyasi</span>
            <span className="block">Biz bilan boshlanadi</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            Avtomobilsozlik cho'qqisini his eting. Bizning ilg'or muhandislik yechimlarimiz bilan mukammallikka erishing.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToCars}
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition shadow-xl shadow-indigo-500/20 active:scale-95"
            >
              Hozir boshlash
            </button>
            <button className="px-10 py-4 border border-gray-600 hover:bg-gray-800 rounded-2xl font-medium transition">
              Batafsil ma'lumot
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img 
            src="https://imagecdnsa.zigwheels.ae/large/gallery/color/34/374/rolls-royce-wraith-color-790726.jpg" 
            alt="Rolls-Royce Spectre" 
            className="w-full h-auto rounded-[2rem] shadow-2xl transform hover:rotate-2 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}