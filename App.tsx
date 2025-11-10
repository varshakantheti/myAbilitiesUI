import { SkipToContent } from "./components/SkipToContent";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Mission } from "./components/Mission";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { AccessibilityToolbar } from "./components/AccessibilityToolbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <Hero />
        <Features />
        <Mission />
        <Products />
        <Testimonials />
      </main>
      <Footer />
      <AccessibilityToolbar />
    </div>
  );
}
