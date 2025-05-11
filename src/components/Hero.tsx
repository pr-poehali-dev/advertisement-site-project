
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-abricos-black py-16 md:py-24 squares-bg">
      <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-abricos-orange/20 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-abricos-green/20 to-transparent opacity-30"></div>
      
      {/* Декоративные квадраты в стиле логотипа */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-abricos-orange/20 rounded-sm rotate-12 animate-float-squares"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-abricos-green/20 rounded-sm -rotate-6 animate-float-squares" style={{animationDelay: "2s"}}></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-abricos-orange/20 rounded-sm rotate-45 animate-float-squares" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-abricos-green/20 rounded-sm -rotate-12 animate-float-squares" style={{animationDelay: "3s"}}></div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <div className="flex justify-center mb-10">
          <img 
            src="https://cdn.poehali.dev/files/8a4a2efa-ad3b-46c8-a26a-9860c0df01f0.png" 
            alt="Логотип Абрикос" 
            className="w-full max-w-md h-auto"
          />
        </div>
        
        <h1 className="mb-6 font-bold tracking-tight text-white text-4xl md:text-5xl lg:text-6xl">
          Рекламное производство <span className="text-abricos-orange">полного</span> цикла
        </h1>
        
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl">
          От идеи до монтажа — изготавливаем любые виды рекламы для вашего бизнеса качественно и в срок
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Button size="lg" className="bg-abricos-green hover:bg-abricos-green/90 text-white text-lg">
            <Icon name="FileText" className="h-5 w-5 mr-2" />
            Наши услуги
          </Button>
          <Button size="lg" variant="outline" className="border-abricos-orange text-abricos-orange hover:bg-abricos-orange/10 text-lg">
            <Icon name="Images" className="h-5 w-5 mr-2" />
            Портфолио
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-abricos-black to-transparent"></div>
      
      {/* Волнистый разделитель в стиле оранжевого цвета для перехода в следующую секцию */}
      <div className="wavy-divider absolute bottom-0 left-0 w-full"></div>
    </section>
  );
};

export default Hero;
