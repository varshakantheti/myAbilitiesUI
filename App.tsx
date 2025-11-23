import { SkipToContent } from "./components/SkipToContent";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Mission } from "./components/Mission";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { DownloadApp } from "./components/DownloadApp";
import { Contact } from "./components/Contact";
import { AccessibilityToolbar } from "./components/AccessibilityToolbar";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <Hero />
          <Products />
          <Mission />
        <Features />
        <Testimonials />
          <DownloadApp />
          <Contact />
      </main>
      <Footer />
      <AccessibilityToolbar />
    </div>
    </LanguageProvider>
  );
}
