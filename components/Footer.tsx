"use client";

import { Button } from "./ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] flex items-center justify-center">
                <span className="text-white uppercase tracking-wider">MA</span>
              </div>
              <span className="text-xl">MyAbilities</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering every ability through accessible task management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#FFB366]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-[#FFB366] transition-colors inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-[#FFB366] transition-colors inline-block">
                  Products
                </a>
              </li>
              <li>
                <a href="#mission" className="text-white/80 hover:text-[#FFB366] transition-colors inline-block">
                  Mission
                </a>
              </li>
              <li>
                <a href="#accessibility" className="text-white/80 hover:text-[#FFB366] transition-colors inline-block">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#FFB366]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <Phone className="w-5 h-5 text-[#FFB366] flex-shrink-0 mt-0.5" />
                <a href="tel:800-920-4011" className="hover:text-[#FFB366] transition-colors">
                  (800) 920-4011
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Mail className="w-5 h-5 text-[#FFB366] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@myabilities.com" className="hover:text-[#FFB366] transition-colors">
                  support@myabilities.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-[#FFB366] flex-shrink-0 mt-0.5" />
                <span>Serving communities nationwide</span>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#FFB366]">Download App</h3>
            <div className="space-y-3">
              <Button 
                className="w-full bg-white hover:bg-gray-100 text-[#1E3A5F] rounded-xl h-12 justify-start"
              >
                <Download className="w-5 h-5 mr-2" />
                Google Play
              </Button>
              <Button 
                className="w-full bg-white hover:bg-gray-100 text-[#1E3A5F] rounded-xl h-12 justify-start"
              >
                <Download className="w-5 h-5 mr-2" />
                App Store
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Accessibility */}
        <div className="border-t border-white/10 pt-8 space-y-6">
          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#FFB366] flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#FFB366] flex items-center justify-center transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#FFB366] flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#FFB366] flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Accessibility Statement */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-white/80 leading-relaxed">
              <strong className="text-white">Accessibility Commitment:</strong> MyAbilities is committed to ensuring digital accessibility for people of all abilities. We continuously work to improve the user experience and apply relevant accessibility standards (WCAG 2.1 Level AA).
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-white/60">
              © {new Date().getFullYear()} MyAbilities. All rights reserved. Empowering every ability, every day.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
