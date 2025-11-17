"use client";

import { motion } from "motion/react";

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

          {/* App Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center justify-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors min-w-[280px]"
            >
              <span className="text-sm font-medium">ANDROID APP ON Google play</span>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center justify-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors min-w-[280px]"
            >
              <span className="text-sm font-medium">Download on the App Store</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

