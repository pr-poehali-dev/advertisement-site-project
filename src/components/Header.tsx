
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">
            <span className="text-[#9b87f5]">Арт</span>Медиа
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium text-sm hover:text-[#9b87f5] transition-colors">
            Главная
          </Link>
          <Link to="/services" className="font-medium text-sm hover:text-[#9b87f5] transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="font-medium text-sm hover:text-[#9b87f5] transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="font-medium text-sm hover:text-[#9b87f5] transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="font-medium text-sm hover:text-[#9b87f5] transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex" variant="outline">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться с нами
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
            <span className="sr-only">Меню</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
