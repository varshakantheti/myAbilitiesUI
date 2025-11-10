"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ZoomIn, ZoomOut, Contrast, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [highContrast]);

  const handleZoomIn = () => {
    if (fontSize < 28) {
      setFontSize(fontSize + 2);
    }
  };

  const handleZoomOut = () => {
    if (fontSize > 14) {
      setFontSize(fontSize - 2);
    }
  };

  const handleReset = () => {
    setFontSize(18);
    setHighContrast(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] hover:from-[#FF9A4D] hover:to-[#FF8533] shadow-xl hover:shadow-2xl transition-all duration-300"
          aria-label="Open accessibility toolbar"
          aria-expanded={isOpen}
        >
          <Contrast className="w-7 h-7 text-white" />
        </Button>
      </motion.div>

      {/* Toolbar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 bg-white dark:bg-[#1A1F26] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-80"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-[#1E3A5F] dark:text-white">
                Accessibility Tools
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="Close accessibility toolbar"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Text Size Controls */}
              <div className="space-y-3">
                <label className="block text-sm text-[#1A3A52] dark:text-gray-300">
                  Text Size
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    onClick={handleZoomOut}
                    disabled={fontSize <= 14}
                    className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-[#FFB366] hover:text-white dark:hover:bg-[#FFB366] text-[#1E3A5F] dark:text-white rounded-xl h-12 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Decrease text size"
                  >
                    <ZoomOut className="w-5 h-5 mr-2" />
                    Smaller
                  </Button>
                  <Button
                    onClick={handleZoomIn}
                    disabled={fontSize >= 28}
                    className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-[#FFB366] hover:text-white dark:hover:bg-[#FFB366] text-[#1E3A5F] dark:text-white rounded-xl h-12 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Increase text size"
                  >
                    <ZoomIn className="w-5 h-5 mr-2" />
                    Larger
                  </Button>
                </div>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Current: {fontSize}px
                </p>
              </div>

              {/* High Contrast Toggle */}
              <div className="space-y-3">
                <label className="block text-sm text-[#1A3A52] dark:text-gray-300">
                  Display Mode
                </label>
                <Button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-full h-12 rounded-xl transition-all ${
                    highContrast
                      ? 'bg-[#1E3A5F] text-white hover:bg-[#2C4F7C]'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-[#FFB366] text-[#1E3A5F] dark:text-white hover:text-white'
                  }`}
                  aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                  aria-pressed={highContrast}
                >
                  <Contrast className="w-5 h-5 mr-2" />
                  {highContrast ? 'High Contrast On' : 'High Contrast Off'}
                </Button>
              </div>

              {/* Reset Button */}
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full border-2 border-gray-300 dark:border-gray-600 text-[#1A3A52] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl h-11 transition-all"
                aria-label="Reset all accessibility settings"
              >
                Reset to Default
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
