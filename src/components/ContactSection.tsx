import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-abricos-black-light squares-bg relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/4 h-64 bg-abricos-orange/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-72 bg-abricos-green/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="inline-block text-3xl font-bold text-white md:text-4xl mb-6 relative">
              Давайте обсудим ваш проект
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-abricos-green rounded"></span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Расскажите нам о ваших идеях, и мы предложим оптимальное решение.
              Заполните форму, и наш менеджер свяжется с вами в течение рабочего
              дня.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-abricos-green/10 p-3 rounded-lg">
                  <Icon name="MapPin" className="h-5 w-5 text-abricos-green" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Адрес</h3>
                  <p className="text-gray-300">
                    г. Оренбург, ул. Комсомольская, д. 65
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-abricos-orange/10 p-3 rounded-lg">
                  <Icon name="Phone" className="h-5 w-5 text-abricos-orange" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Телефон</h3>
                  <p className="text-gray-300">+7 (3532) 51-36-66</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-abricos-green/10 p-3 rounded-lg">
                  <Icon name="Mail" className="h-5 w-5 text-abricos-green" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-gray-300">info@abricos-reklama.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-abricos-orange/10 p-3 rounded-lg">
                  <Icon name="Clock" className="h-5 w-5 text-abricos-orange" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Режим работы</h3>
                  <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden border-none shadow-xl bg-abricos-black">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-white"
                        >
                          Ваше имя
                        </label>
                        <Input
                          id="name"
                          placeholder="Введите ваше имя"
                          className="bg-abricos-gray/20 border-abricos-gray text-white placeholder:text-gray-500 focus:border-abricos-orange"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-white"
                        >
                          Телефон
                        </label>
                        <Input
                          id="phone"
                          placeholder="+7 (___) ___-__-__"
                          className="bg-abricos-gray/20 border-abricos-gray text-white placeholder:text-gray-500 focus:border-abricos-orange"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-abricos-gray/20 border-abricos-gray text-white placeholder:text-gray-500 focus:border-abricos-orange"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                      >
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш проект или вопрос"
                        rows={4}
                        className="bg-abricos-gray/20 border-abricos-gray text-white placeholder:text-gray-500 focus:border-abricos-orange"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-abricos-orange hover:bg-abricos-orange/90 text-white grow">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>
                    <Button className="bg-abricos-green hover:bg-abricos-green/90 text-white">
                      <Icon name="FileText" className="mr-2 h-4 w-4" />
                      Скачать прайс
                    </Button>
                  </div>
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
