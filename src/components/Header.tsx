
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-abricos-black border-b border-abricos-gray">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden">
            <div className="w-full h-full rounded-full bg-abricos-orange"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 md:w-10 md:h-4 bg-abricos-green rounded-t-full"></div>
          </div>
          <span className="font-bold text-2xl md:text-3xl">
            <span className="text-abricos-green">Абри</span>
            <span className="text-abricos-orange">кос</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium text-base text-white hover:text-abricos-orange transition-colors">
            Главная
          </Link>
          <Link to="/services" className="font-medium text-base text-white hover:text-abricos-orange transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="font-medium text-base text-white hover:text-abricos-orange transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="font-medium text-base text-white hover:text-abricos-orange transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="font-medium text-base text-white hover:text-abricos-orange transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            className="hidden md:flex bg-abricos-orange hover:bg-abricos-orange/90 text-white" 
            size="lg"
          >
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться с нами
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-abricos-gray">
                <Icon name="Menu" className="h-6 w-6" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-abricos-black border-abricos-gray">
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  to="/" 
                  className="px-4 py-3 text-white hover:bg-abricos-gray rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-3 text-white hover:bg-abricos-gray rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Услуги
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-4 py-3 text-white hover:bg-abricos-gray rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Портфолио
                </Link>
                <Link 
                  to="/about" 
                  className="px-4 py-3 text-white hover:bg-abricos-gray rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  О нас
                </Link>
                <Link 
                  to="/contacts" 
                  className="px-4 py-3 text-white hover:bg-abricos-gray rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Контакты
                </Link>
                <Button 
                  className="bg-abricos-orange hover:bg-abricos-orange/90 text-white mt-4" 
                >
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  Связаться с нами
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
