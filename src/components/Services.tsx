
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const services = [
  {
    title: "Наружная реклама",
    description: "Изготовление вывесок, световых коробов, объемных букв, крышных установок, стел и указателей.",
    icon: "Presentation",
    color: "orange"
  },
  {
    title: "Интерьерная реклама",
    description: "Оформление торговых залов, фирменного стиля, ресепшн, стойки, баннеры и POS-материалы.",
    icon: "Store",
    color: "green"
  },
  {
    title: "Широкоформатная печать",
    description: "Печать баннеров, перетяжек, постеров, плакатов, афиш и других рекламных материалов большого размера.",
    icon: "Printer",
    color: "orange"
  },
  {
    title: "Оклейка транспорта",
    description: "Брендирование корпоративного транспорта, нанесение рекламы и оклейка автомобилей виниловыми пленками.",
    icon: "Car",
    color: "green"
  },
  {
    title: "Полиграфия",
    description: "Визитки, листовки, буклеты, календари, каталоги и другая печатная продукция с вашим фирменным стилем.",
    icon: "FileText",
    color: "orange"
  },
  {
    title: "Сувенирная продукция",
    description: "Изготовление брендированных сувениров: ручки, кружки, футболки, блокноты и другие корпоративные подарки.",
    icon: "Gift",
    color: "green"
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-abricos-black-light squares-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold tracking-tight md:text-4xl mb-4 text-white relative">
            Наши услуги
            <span className="absolute bottom-0 left-0 w-full h-1 bg-abricos-orange rounded"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            Полный спектр рекламных услуг под ключ — от разработки дизайна до монтажа готовой продукции
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 border-transparent hover:border-abricos-gray bg-abricos-black hover:shadow-lg hover:shadow-abricos-orange/5 overflow-hidden group">
              <CardContent className="p-0">
                <div className={`h-2 w-full bg-abricos-${service.color}`}></div>
                <div className="p-6">
                  <div className={`mb-4 p-3 w-14 h-14 rounded-lg bg-abricos-${service.color}/10 flex items-center justify-center group-hover:bg-abricos-${service.color}/20 transition-colors`}>
                    <Icon 
                      name={service.icon} 
                      className={`h-7 w-7 text-abricos-${service.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-abricos-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
