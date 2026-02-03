import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { cafeInfo } from '@/data/menuData';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/contacts', label: 'Контакты' },
    { href: '/menu', label: 'Меню' },
    { href: '/events', label: 'События' },
  ];

  const phoneNumber = cafeInfo.phone.replace(/[^\d+]/g, '');
  const telegramLink = cafeInfo.social?.telegram;

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Magic Coffee" 
              className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive(link.href) 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary/60 text-foreground hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Action buttons */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-body"
              >
                <Phone className="w-4 h-4" />
                Позвонить
              </a>
              {telegramLink && (
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/60 text-foreground hover:bg-primary/20 hover:text-primary transition-all"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-lg mb-4 p-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-center py-3 px-4 rounded-full font-body transition-all ${
                    isActive(link.href) 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-secondary/60 text-foreground hover:bg-primary/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile action buttons */}
              <div className="flex gap-2 mt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-primary text-primary-foreground font-body"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
                {telegramLink && (
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/60 text-foreground"
                    aria-label="Telegram"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
