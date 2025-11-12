"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Globe, Download } from "lucide-react";

export function Header() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const text = {
    en: {
      home: "Home",
      about: "About Us",
      team: "Team",
      hospitals: "Hospitals",
      leadership: "Leadership",
      products: "Products",
      autism: "Autism",
      history: "History",
      videos: "Videos",
      mission: "Mission",
      donate: "Donate Now",
      call: "Call",
      download: "Download App"
    },
    es: {
      home: "Inicio",
      about: "Sobre Nosotros",
      team: "Equipo",
      hospitals: "Hospitales",
      leadership: "Liderazgo",
      products: "Productos",
      autism: "Autismo",
      history: "Historia",
      videos: "Videos",
      mission: "Misión",
      donate: "Donar Ahora",
      call: "Llamar",
      download: "Descargar App"
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
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo.png`} 
              alt="MyAbilities Logo" 
              className="h-20 w-auto group-hover:opacity-90 transition-opacity"
              onError={(e) => {
                // Fallback to SVG if PNG doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = `${import.meta.env.BASE_URL}assets/logo.svg`;
              }}
            />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a 
              href="#home" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#457eac] hover:bg-[#457eac]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#457eac] focus:outline-offset-2 font-semibold"
            >
              {t.home}
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#457eac] hover:bg-[#457eac]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#457eac] focus:outline-offset-2 whitespace-nowrap font-semibold"
            >
              {t.about}
            </a>
            <a 
              href="#products" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#457eac] hover:bg-[#457eac]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#457eac] focus:outline-offset-2 font-semibold"
            >
              {t.products}
            </a>
            <a 
              href="#mission" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#457eac] hover:bg-[#457eac]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#457eac] focus:outline-offset-2 font-semibold"
            >
              {t.mission}
            </a>
            <a 
              href="#videos" 
              className="px-4 py-2 text-[#1A3A52] hover:text-[#457eac] hover:bg-[#457eac]/10 rounded-lg transition-all focus:outline-2 focus:outline-[#457eac] focus:outline-offset-2 font-semibold"
            >
              {t.videos}
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

            {/* Download Button */}
            <Button 
              className="hidden md:flex items-center gap-2 bg-[#457eac] hover:bg-[#37648c] text-white rounded-xl h-11 px-5 transition-all"
              onClick={() => window.location.href = '#download'}
            >
              <Download className="w-4 h-4" />
              <span>{t.download}</span>
            </Button>

            {/* Call Button */}
            <Button 
              className="hidden md:flex items-center gap-2 bg-[#457eac] hover:bg-[#37648c] text-white rounded-xl h-11 px-5 transition-all"
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
