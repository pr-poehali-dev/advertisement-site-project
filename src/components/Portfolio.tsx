
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolioItems = [
  {
    id: 1,
    title: "Наружная реклама для сети кафе 'Вкусно'",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 2,
    title: "Брендинг магазина 'GreenLife'",
    category: "branding",
    image: "https://images.unsplash.com/photo-1523292267758-c513a5a91909?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 3,
    title: "SMM-кампания для 'TechInnovations'",
    category: "digital",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 4,
    title: "Рекламные материалы для выставки 'ArtExpo'",
    category: "print",
    image: "https://images.unsplash.com/photo-1576615278693-f8e095e37e01?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 5,
    title: "Промо-видео для бренда 'SportMax'",
    category: "video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    id: 6,
    title: "Корпоративный сайт для 'InvestGroup'",
    category: "web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }
];

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Взгляните на проекты, которые мы успешно реализовали
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Все работы</TabsTrigger>
              <TabsTrigger value="outdoor">Наружная реклама</TabsTrigger>
              <TabsTrigger value="digital">Цифровой маркетинг</TabsTrigger>
              <TabsTrigger value="branding">Брендинг</TabsTrigger>
              <TabsTrigger value="print">Полиграфия</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          {["outdoor", "digital", "branding", "print", "video", "web"].map((category) => (
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
    <Card className="overflow-hidden group cursor-pointer">
      <CardContent className="p-0">
        <AspectRatio ratio={16/9}>
          <div className="relative w-full h-full">
            <img 
              src={item.image} 
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white font-medium text-lg">{item.title}</h3>
            </div>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
