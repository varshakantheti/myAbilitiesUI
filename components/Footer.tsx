"use client";

import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Low-poly geometric pattern overlay */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-polygon-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Main polygon shapes */}
              <polygon points="0,0 60,40 120,0 100,60 120,120 60,80 0,120 20,60" 
                       fill="none" 
                       stroke="rgba(0,0,0,0.08)" 
                       strokeWidth="1"/>
              <polygon points="30,30 90,30 120,60 90,90 30,90 0,60" 
                       fill="none" 
                       stroke="rgba(0,0,0,0.06)" 
                       strokeWidth="1"/>
              {/* Diagonal lines creating triangular divisions */}
              <line x1="0" y1="0" x2="120" y2="120" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8"/>
              <line x1="120" y1="0" x2="0" y2="120" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8"/>
              <line x1="60" y1="0" x2="60" y2="120" stroke="rgba(0,0,0,0.04)" strokeWidth="0.8"/>
              <line x1="0" y1="60" x2="120" y2="60" stroke="rgba(0,0,0,0.04)" strokeWidth="0.8"/>
              {/* Additional connecting lines for more complexity */}
              <line x1="0" y1="0" x2="60" y2="60" stroke="rgba(0,0,0,0.03)" strokeWidth="0.6"/>
              <line x1="120" y1="0" x2="60" y2="60" stroke="rgba(0,0,0,0.03)" strokeWidth="0.6"/>
              <line x1="0" y1="120" x2="60" y2="60" stroke="rgba(0,0,0,0.03)" strokeWidth="0.6"/>
              <line x1="120" y1="120" x2="60" y2="60" stroke="rgba(0,0,0,0.03)" strokeWidth="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-polygon-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  About us – Team
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#autism" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Autism
                </a>
              </li>
              <li>
                <a href="#hospitals" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Hospitals
                </a>
              </li>
              <li>
                <a href="#donate" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Donate Now – Tax Deductible
                </a>
              </li>
              <li>
                <a href="#history" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="#management-console" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Management Console
                </a>
              </li>
              <li>
                <a href="#videos" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  videos
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#task-scheduler" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Task Scheduler
                </a>
              </li>
              <li>
                <a href="#physician" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Physician
                </a>
              </li>
              <li>
                <a href="#management-console" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Management Console
                </a>
              </li>
              <li>
                <a href="#download" className="text-black/80 hover:text-[#1E3A5F] transition-colors">
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us on */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Follow Us on</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-3 text-black/80 hover:text-[#1E3A5F] transition-colors">
                  <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-black/80 hover:text-[#1E3A5F] transition-colors">
                  <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-black/80 hover:text-[#1E3A5F] transition-colors">
                  <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-black/80 hover:text-[#1E3A5F] transition-colors">
                  <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Download</h3>
            <a 
              href="#" 
              className="flex items-center gap-3 bg-[#1E3A5F] text-white px-4 py-3 rounded-lg hover:bg-[#2C4F7C] transition-colors"
            >
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-black text-xs font-bold">G</span>
              </div>
              <span className="text-sm font-medium">Download App</span>
            </a>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Quick Contact</h3>
            <ul className="space-y-2 text-black/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:404-882-1117" className="hover:text-[#1E3A5F] transition-colors">
                  Phone: 404-882-1117
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:cmeertins@myabilities.org" className="hover:text-[#1E3A5F] transition-colors">
                  cmeertins@myabilities.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/20 pt-8 mt-8">
          <div className="text-center text-black/60 text-sm">
            © {new Date().getFullYear()} MyAbilities. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
