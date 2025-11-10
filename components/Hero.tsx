"use client";

import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Download, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#FFB366] via-[#FFCC99] to-[#FFD9B3] pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-6xl text-[#1E3A5F] leading-tight">
              Empowering Every Ability. Every Task. Every Day.
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#1A3A52] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              MyAbilities Task Scheduler helps schools, caregivers, and participants stay organized and independent through accessible task management tools.
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
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] rounded-3xl blur-3xl opacity-20 transform scale-95"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-8 max-w-sm">
                <div className="aspect-[9/16] w-full bg-gradient-to-br from-[#FFF5EB] to-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1641862039942-5815d8f74938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBjbGVhbnxlbnwxfHx8fDE3NjI3OTc0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="MyAbilities app interface showing accessible task management"
                    className="w-full h-full object-cover"
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
