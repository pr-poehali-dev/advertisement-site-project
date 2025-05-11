
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] border-t border-gray-800 pt-12 pb-8 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="font-bold text-xl text-white">
                <span className="text-[#9b87f5]">Арт</span>Медиа
              </span>
            </div>
            <p className="mb-4 text-gray-400">
              Профессиональные рекламные решения для вашего бизнеса с 2010 года
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/outdoor" className="hover:text-[#9b87f5] transition-colors">
                  Наружная реклама
                </Link>
              </li>
              <li>
                <Link to="/services/digital" className="hover:text-[#9b87f5] transition-colors">
                  Цифровой маркетинг
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-[#9b87f5] transition-colors">
                  Брендинг и фирменный стиль
                </Link>
              </li>
              <li>
                <Link to="/services/print" className="hover:text-[#9b87f5] transition-colors">
                  Полиграфия
                </Link>
              </li>
              <li>
                <Link to="/services/video" className="hover:text-[#9b87f5] transition-colors">
                  Видеопродакшн
                </Link>
              </li>
              <li>
                <Link to="/services/web" className="hover:text-[#9b87f5] transition-colors">
                  Веб-разработка
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-[#9b87f5] transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#9b87f5] transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#9b87f5] transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#9b87f5] transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#9b87f5] transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Icon name="MapPin" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <span>г. Москва, ул. Рекламная, д. 123</span>
              </li>
              <li className="flex">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <span>info@artmedia.ru</span>
              </li>
              <li className="flex">
                <Icon name="Clock" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} АртМедиа. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
