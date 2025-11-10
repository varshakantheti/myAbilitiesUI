"use client";

import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Download, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#FF9A4D] to-[#FFB366] pt-8"
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <motion.div 
            className="space-y-8 text-center lg:text-left lg:ml-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl lg:text-5xl text-black leading-tight mx-auto lg:mx-0 tracking-tight font-bold">
              <span className="whitespace-nowrap">Empowering Every Ability.</span><br />
              Every Task. Every Day.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Accessible task scheduling for schools, special needs participants, seniors, caregivers, and veterans with tools for independence.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg"
                  className="bg-[#1E3A5F] hover:bg-[#2C4F7C] text-white h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Download App
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white h-14 px-8 rounded-xl transition-all text-lg group"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end lg:mr-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] rounded-3xl blur-3xl opacity-20 transform scale-95"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-8 max-w-xs">
                  <div className="w-full bg-gradient-to-br from-[#FFF5EB] to-white rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src="/assets/iphone.png"
                      alt="MyAbilities app interface showing accessible task management"
                      className="w-full h-auto object-contain max-w-[280px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
