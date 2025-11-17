"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

export function DownloadApp() {
  return (
    <section id="download" className="relative py-12 lg:py-16 overflow-hidden mt-16 lg:mt-20">
      {/* Background Image with blur and overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}assets/office-background.jpeg`}
          alt="Office background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFD9B3] mb-6"
          >
            Download the App Now to Your Phone or Mobile Device
          </motion.h2>

          {/* Search Instruction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl text-white mb-4"
          >
            Search: MyAbilities in Apple and Google Play
          </motion.p>

          {/* Features List */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/90 mb-12"
          >
            Customizable Reminders • Push Notifications • Accessibility Friendly
          </motion.p>

          {/* Download App Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <a
              href="#"
              className="flex items-center gap-3 bg-[#457eac] text-white px-8 py-4 rounded-lg hover:bg-[#37648c] transition-colors"
            >
              <Download className="w-5 h-5" />
              <span className="text-base font-medium">Download App</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

