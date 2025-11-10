"use client";

import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { Calendar, Users, BarChart3, Accessibility } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Accessibility,
      title: "Accessibility Tools",
      description: "Designed for users of all abilities with customizable interfaces and assistive features."
    },
    {
      icon: Calendar,
      title: "Task Scheduling",
      description: "Visual schedules with reminders that adapt to individual needs and routines."
    },
    {
      icon: Users,
      title: "Caregiver Dashboard",
      description: "Collaborative tools for educators, parents, and healthcare providers."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor achievements and celebrate milestones with detailed insights."
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            Built for Independence
          </h2>
          <p className="text-xl text-[#1A3A52]">
            Tools designed with accessibility and empowerment at the core.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-[#FFF9F0] border-2 border-gray-100 hover:border-[#FFB366] transition-all duration-300 hover:shadow-xl group rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-xl text-[#1E3A5F]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#1A3A52] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
