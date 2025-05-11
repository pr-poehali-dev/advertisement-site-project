
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl mb-6">
              Давайте обсудим ваш проект
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Расскажите нам о ваших идеях, и мы поможем воплотить их в жизнь. 
              Заполните форму, и наш менеджер свяжется с вами в течение рабочего дня.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#9b87f5]/20 p-3 rounded-lg">
                  <Icon name="MapPin" className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Адрес</h3>
                  <p className="text-gray-300">г. Москва, ул. Рекламная, д. 123</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#9b87f5]/20 p-3 rounded-lg">
                  <Icon name="Phone" className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#9b87f5]/20 p-3 rounded-lg">
                  <Icon name="Mail" className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-gray-300">info@artmedia.ru</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Ваше имя
                        </label>
                        <Input id="name" placeholder="Введите ваше имя" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Телефон
                        </label>
                        <Input id="phone" placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш проект или вопрос"
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#9b87f5] hover:bg-[#8676d9] text-white">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
