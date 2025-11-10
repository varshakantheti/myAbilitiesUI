"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Globe, Home } from "lucide-react";

export function Header() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const text = {
    en: {
      home: "Home",
      about: "About Us",
      products: "Products",
      mission: "Mission",
      donate: "Donate Now",
      call: "Call"
    },
    es: {
      home: "Inicio",
      about: "Sobre Nosotros",
      products: "Productos",
      mission: "Misión",
      donate: "Donar Ahora",
      call: "Llamar"
    }
  };

  const t = text[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-2 focus:outline-[#FFB366] focus:outline-offset-4 rounded-lg"
            aria-label="MyAbilities Home"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div className="hidden md:block">
              <span className="text-[#1E3A5F] text-xl block">MyAbilities</span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a 
              href="#about" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#FFB366] hover:bg-[#FFB366]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#FFB366] focus:outline-offset-2"
            >
              {t.about}
            </a>
            <a 
              href="#products" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#FFB366] hover:bg-[#FFB366]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#FFB366] focus:outline-offset-2"
            >
              {t.products}
            </a>
            <a 
              href="#mission" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#FFB366] hover:bg-[#FFB366]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#FFB366] focus:outline-offset-2"
            >
              {t.mission}
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 text-[#1A3A52] hover:text-[#FFB366] hover:bg-[#FFB366]/10"
              aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language === "en" ? "ES" : "EN"}</span>
            </Button>

            {/* Call Button */}
            <Button 
              variant="outline"
              className="hidden md:flex items-center gap-2 border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white rounded-xl h-11 px-5 transition-all"
              onClick={() => window.location.href = 'tel:800-920-4011'}
            >
              <Phone className="w-4 h-4" />
              <span>{t.call} (800) 920-4011</span>
            </Button>
            
            {/* Donate Button */}
            <Button 
              className="bg-[#FFB366] hover:bg-[#FF9A4D] text-white rounded-xl h-11 px-6 shadow-md hover:shadow-lg transition-all"
              onClick={() => window.location.href = '#donate'}
            >
              {t.donate}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
