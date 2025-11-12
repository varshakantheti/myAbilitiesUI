"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Calendar, LayoutDashboard, Stethoscope, ChevronRight } from "lucide-react";

export function Products() {
  const products = [
    {
      icon: Calendar,
      title: "Task Scheduler",
      description: "Visual scheduling with customizable reminders and picture-based tasks for all abilities.",
    },
    {
      icon: LayoutDashboard,
      title: "Management Console",
      description: "Dashboard for caregivers to create, assign, and track tasks with real-time updates.",
    },
    {
      icon: Stethoscope,
      title: "For Physicians",
      description: "Send medication instructions and schedules directly to patients' phones to speed up recovery and promote healthier habits.",
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            Products
          </h2>
          <p className="text-xl text-[#1A3A52]">
            Comprehensive solutions for individuals, caregivers, and healthcare providers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-[#FFF9F0] border-2 border-gray-100 hover:border-[#FFB366] transition-all duration-300 hover:shadow-2xl group rounded-2xl overflow-hidden">
                <CardHeader className="space-y-4 pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <product.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-2xl text-[#1E3A5F]">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-lg text-[#1A3A52] leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white rounded-xl h-12 transition-all duration-300 group/btn"
                  >
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
