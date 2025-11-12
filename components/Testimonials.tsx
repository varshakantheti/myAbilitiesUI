"use client";

import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Quote, ChevronRight } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Parent & Caregiver",
      image: "https://images.unsplash.com/photo-1760992003923-ed5d455c1164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwcGVyc29ufGVufDF8fHx8MTc2Mjc5NzQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "MyAbilities gave my daughter the independence she needed. She can now manage her daily tasks confidently."
    },
    {
      name: "James Thompson",
      role: "Veteran & User",
      image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI2OTgzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The visual reminders help me stay on track every day. This app understands what I need."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Special Education Director",
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NjI3NTA1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Our students thrive with MyAbilities. The accessibility features make all the difference in their success."
    },
    {
      name: "Robert Miller",
      role: "Senior Center Coordinator",
      image: "https://images.unsplash.com/photo-1758691030817-a6271a533c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB1c2luZyUyMHRhYmxldCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNzk3NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Our seniors love how simple and clear the app is. It's become an essential part of our programming."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#457eac] via-[#37648c] to-[#457eac] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFB366] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB366] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Stories of Empowerment
          </h2>
          <p className="text-xl text-white/90">
            Real experiences from our community of users, caregivers, and educators.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/95 backdrop-blur-sm border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 lg:p-8 space-y-6">
                  <Quote className="w-10 h-10 text-[#FFB366] opacity-40" />
                  
                  <p className="text-[#1A3A52] leading-relaxed min-h-[100px]">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#FFB366]/30 shadow-md flex-shrink-0">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#457eac] truncate">{testimonial.name}</p>
                      <p className="text-sm text-[#1A3A52]/70 truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white text-[#457eac] hover:bg-white/90 hover:text-[#457eac] rounded-xl h-14 px-8 transition-all text-lg group"
          >
            Read More Stories
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
