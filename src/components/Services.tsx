
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const services = [
  {
    title: "Наружная реклама",
    description: "Билборды, вывески и конструкции любой сложности. Разработка дизайна и производство.",
    icon: "Presentation"
  },
  {
    title: "Цифровой маркетинг",
    description: "SEO, SMM, таргетированная и контекстная реклама для вашего бизнеса.",
    icon: "MonitorSmartphone"
  },
  {
    title: "Брендинг",
    description: "Разработка логотипов, фирменного стиля и брендбуков для вашей компании.",
    icon: "Palette"
  },
  {
    title: "Полиграфия",
    description: "Печать рекламных материалов высокого качества любых форматов и тиражей.",
    icon: "Printer"
  },
  {
    title: "Видеопродакшн",
    description: "Создание рекламных роликов, промо-видео и корпоративных фильмов.",
    icon: "Video"
  },
  {
    title: "Веб-разработка",
    description: "Создание современных и удобных сайтов, интернет-магазинов и приложений.",
    icon: "Code"
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Полный спектр рекламных услуг под ключ для эффективного продвижения вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale group transition-all duration-300 border-border/60 hover:border-[#9b87f5]/50 hover:shadow-md">
              <CardHeader>
                <div className="mb-2 p-2 w-12 h-12 rounded-lg bg-[#9b87f5]/10 flex items-center justify-center group-hover:bg-[#9b87f5]/20 transition-colors">
                  <Icon 
                    name={service.icon} 
                    className="h-6 w-6 text-[#9b87f5] group-hover:text-[#7a69d0]" 
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
