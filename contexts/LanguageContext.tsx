"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: {
    // Header translations
    home: string;
    about: string;
    team: string;
    hospitals: string;
    leadership: string;
    products: string;
    autism: string;
    history: string;
    videos: string;
    mission: string;
    donate: string;
    call: string;
    download: string;
    // Hero translations
    heroTitle1: string;
    heroTitle2: string;
    heroTitle3: string;
    heroDescription: string;
    downloadApp: string;
    learnMore: string;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
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
    download: "Download App",
    heroTitle1: "Empowering Every Ability.",
    heroTitle2: "Every Task.",
    heroTitle3: "Every Day.",
    heroDescription: "MyAbilities Task Scheduler is a mobile app and management console that empowers schools, special needs participants, seniors, caregivers, and veterans with accessible tools for independence.",
    downloadApp: "Download App",
    learnMore: "Learn More"
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
    download: "Descargar App",
    heroTitle1: "Empoderando Cada Habilidad.",
    heroTitle2: "Cada Tarea.",
    heroTitle3: "Cada Día.",
    heroDescription: "MyAbilities Task Scheduler es una aplicación móvil y consola de gestión que empodera a escuelas, participantes con necesidades especiales, personas mayores, cuidadores y veteranos con herramientas accesibles para la independencia.",
    downloadApp: "Descargar App",
    learnMore: "Saber Más"
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

