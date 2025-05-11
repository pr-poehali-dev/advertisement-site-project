
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1F2C] py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9b87f5]/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#9b87f5]/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <h1 className="mb-6 font-bold tracking-tight text-white animate-fade-in text-4xl md:text-5xl lg:text-6xl">
          Создаем рекламу, которая <span className="text-[#9b87f5]">работает</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl">
          Комплексные рекламные решения для роста вашего бизнеса. 
          От концепции до реализации — мы делаем рекламу, которая привлекает клиентов.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8676d9] text-white">
            Наши услуги
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Портфолио
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
