
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolioItems = [
  {
    id: 1,
    title: "Вывеска для ТЦ 'МЕГА'",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 2,
    title: "Брендирование автопарка 'ЭкоТранс'",
    category: "vehicle",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8017f69?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 3,
    title: "Оформление стойки ресепшн 'БизнесЦентр'",
    category: "interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 4,
    title: "Печать баннеров для выставки 'ЭкспоФорум'",
    category: "print",
    image: "https://images.unsplash.com/photo-1576615278693-f8e095e37e01?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 5,
    title: "Рекламные стелы для АЗС 'ТопГаз'",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 6,
    title: "Сувенирная продукция для 'Инновации+'",
    category: "promo",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }
];

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24 bg-abricos-black squares-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold tracking-tight md:text-4xl mb-4 text-white relative">
            Наши работы
            <span className="absolute bottom-0 left-0 w-full h-1 bg-abricos-green rounded"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            Реализованные проекты, которыми мы гордимся
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-4">
            <TabsList className="bg-abricos-gray/30 p-1 rounded-full">
              <TabsTrigger 
                value="all" 
                className="rounded-full data-[state=active]:bg-abricos-orange data-[state=active]:text-white text-gray-300"
              >
                Все работы
              </TabsTrigger>
              <TabsTrigger 
                value="outdoor" 
                className="rounded-full data-[state=active]:bg-abricos-orange data-[state=active]:text-white text-gray-300"
              >
                Наружная реклама
              </TabsTrigger>
              <TabsTrigger 
                value="interior" 
                className="rounded-full data-[state=active]:bg-abricos-orange data-[state=active]:text-white text-gray-300"
              >
                Интерьерная реклама
              </TabsTrigger>
              <TabsTrigger 
                value="vehicle" 
                className="rounded-full data-[state=active]:bg-abricos-orange data-[state=active]:text-white text-gray-300"
              >
                Транспорт
              </TabsTrigger>
              <TabsTrigger 
                value="print" 
                className="rounded-full data-[state=active]:bg-abricos-orange data-[state=active]:text-white text-gray-300"
              >
                Печать
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          {["outdoor", "interior", "vehicle", "print", "promo"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const PortfolioCard = ({ item }: { item: typeof portfolioItems[0] }) => {
  return (
    <Card className="overflow-hidden group cursor-pointer border-transparent bg-transparent hover:shadow-lg hover:shadow-abricos-green/10 transition-all duration-300">
      <CardContent className="p-0">
        <AspectRatio ratio={16/9}>
          <div className="relative w-full h-full rounded overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abricos-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
              <div className="p-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <div className="h-1 w-12 bg-abricos-orange mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
