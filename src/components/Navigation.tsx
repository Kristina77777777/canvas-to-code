import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Send, Instagram } from 'lucide-react';
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
  const instagramLink = cafeInfo.social?.instagram;

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
                className={`font-body px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.href) 
                    ? 'bg-card/90 backdrop-blur-sm border border-border text-foreground shadow-sm' 
                    : 'bg-card/90 backdrop-blur-sm border border-border text-foreground hover:bg-card hover:shadow-md'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Separator */}
            <div className="w-px h-8 bg-foreground/20 mx-2" />
            
            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-body font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Phone className="w-4 h-4 group-hover:animate-[pulse_0.5s_ease-in-out]" />
                Позвонить
              </a>
              {telegramLink && (
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-11 h-11 rounded-full bg-[#229ED9] text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              )}
              {instagramLink && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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
                  className={`block w-full text-center py-3 px-4 rounded-lg font-body transition-all ${
                    isActive(link.href) 
                      ? 'bg-card/90 backdrop-blur-sm border border-border text-foreground shadow-sm' 
                      : 'bg-card/90 backdrop-blur-sm border border-border text-foreground hover:bg-card'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Separator */}
              <div className="h-px w-full bg-foreground/10 my-2" />
              
              {/* Mobile action buttons */}
              <div className="flex gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-body font-medium shadow-md active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
                {telegramLink && (
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#229ED9] text-white shadow-md active:scale-95 transition-all"
                    aria-label="Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </a>
                )}
                {instagramLink && (
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md active:scale-95 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
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
