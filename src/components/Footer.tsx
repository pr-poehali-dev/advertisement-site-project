import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-abricos-black border-t border-abricos-gray pt-12 pb-8 text-gray-300 relative overflow-hidden">
      {/* Декоративные квадраты */}
      <div className="absolute top-10 right-10 w-8 h-8 bg-abricos-orange/5 rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-abricos-green/5 -rotate-6"></div>
      <div className="absolute bottom-40 right-20 w-10 h-10 bg-abricos-orange/5 rotate-45"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6 flex items-center">
              <div className="w-10 h-10 relative overflow-hidden mr-2">
                <div className="w-full h-full rounded-full bg-abricos-orange"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-abricos-green rounded-t-full"></div>
              </div>
              <span className="font-bold text-2xl">
                <span className="text-abricos-green">Абри</span>
                <span className="text-abricos-orange">кос</span>
              </span>
            </div>
            <p className="mb-6 text-gray-400">
              Мы производим рекламу, которая работает на ваш бизнес. Более 10
              лет опыта и сотни довольных клиентов.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-abricos-gray/30 flex items-center justify-center hover:bg-abricos-orange/20 transition-colors group"
              >
                <Icon
                  name="Facebook"
                  className="h-5 w-5 text-gray-400 group-hover:text-abricos-orange"
                />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-abricos-gray/30 flex items-center justify-center hover:bg-abricos-green/20 transition-colors group"
              >
                <Icon
                  name="Instagram"
                  className="h-5 w-5 text-gray-400 group-hover:text-abricos-green"
                />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-abricos-gray/30 flex items-center justify-center hover:bg-abricos-orange/20 transition-colors group"
              >
                <Icon
                  name="Twitter"
                  className="h-5 w-5 text-gray-400 group-hover:text-abricos-orange"
                />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-abricos-gray/30 flex items-center justify-center hover:bg-abricos-green/20 transition-colors group"
              >
                <Icon
                  name="Youtube"
                  className="h-5 w-5 text-gray-400 group-hover:text-abricos-green"
                />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 relative inline-block">
              Услуги
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-abricos-orange"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/outdoor"
                  className="hover:text-abricos-orange transition-colors flex items-center"
                >
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 mr-2 text-abricos-orange"
                  />
                  Наружная реклама
                </Link>
              </li>
              <li>
                <Link
                  to="/services/interior"
                  className="hover:text-abricos-green transition-colors flex items-center"
                >
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 mr-2 text-abricos-green"
                  />
                  Интерьерная реклама
                </Link>
              </li>
              <li>
                <Link
                  to="/services/print"
                  className="hover:text-abricos-orange transition-colors flex items-center"
                >
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 mr-2 text-abricos-orange"
                  />
                  Широкоформатная печать
                </Link>
              </li>
              <li>
                <Link
                  to="/services/vehicle"
                  className="hover:text-abricos-green transition-colors flex items-center"
                >
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 mr-2 text-abricos-green"
                  />
                  Оклейка транспорта
                </Link>
              </li>
              <li>
                <Link
                  to="/services/polygraphy"
                  className="hover:text-abricos-orange transition-colors flex items-center"
                >
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 mr-2 text-abricos-orange"
                  />
                  Полиграфия
                </Link>
              </li>
              <li>
                <Link
                  to="/services/souvenirs"
                  className="hover:text-abricos-green transition-colors flex items-center"
                >
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 mr-2 text-abricos-green"
                  />
                  Сувенирная продукция
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 relative inline-block">
              Компания
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-abricos-green"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-abricos-orange transition-colors flex items-center"
                >
                  <Icon
                    name="Info"
                    className="h-4 w-4 mr-2 text-abricos-orange"
                  />
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-abricos-green transition-colors flex items-center"
                >
                  <Icon
                    name="Images"
                    className="h-4 w-4 mr-2 text-abricos-green"
                  />
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-abricos-orange transition-colors flex items-center"
                >
                  <Icon
                    name="Users"
                    className="h-4 w-4 mr-2 text-abricos-orange"
                  />
                  Команда
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-abricos-green transition-colors flex items-center"
                >
                  <Icon
                    name="Star"
                    className="h-4 w-4 mr-2 text-abricos-green"
                  />
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-abricos-orange transition-colors flex items-center"
                >
                  <Icon
                    name="FileText"
                    className="h-4 w-4 mr-2 text-abricos-orange"
                  />
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 relative inline-block">
              Контакты
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-abricos-orange"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <Icon
                  name="MapPin"
                  className="h-5 w-5 mr-3 text-abricos-green shrink-0"
                />
                <span>г. Оренбург, ул. Комсомольская, д. 65</span>
              </li>
              <li className="flex">
                <Icon
                  name="Phone"
                  className="h-5 w-5 mr-3 text-abricos-orange shrink-0"
                />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex">
                <Icon
                  name="Mail"
                  className="h-5 w-5 mr-3 text-abricos-green shrink-0"
                />
                <span>info@abricos-reklama.ru</span>
              </li>
              <li className="flex">
                <Icon
                  name="Clock"
                  className="h-5 w-5 mr-3 text-abricos-orange shrink-0"
                />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-abricos-gray pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Рекламная компания «Абрикос». Все
              права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 hover:text-abricos-orange"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-abricos-green"
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
