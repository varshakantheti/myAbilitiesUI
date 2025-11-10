"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Heart, Users, Target, Sparkles } from "lucide-react";

export function Mission() {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every feature is designed with empathy and understanding."
    },
    {
      icon: Users,
      title: "Built Together",
      description: "Created with input from users, caregivers, and educators."
    },
    {
      icon: Target,
      title: "Independence",
      description: "Empowering users to achieve their goals at their own pace."
    },
    {
      icon: Sparkles,
      title: "Continuous Growth",
      description: "Celebrating every milestone, big and small."
    }
  ];

  return (
    <section id="mission" className="py-20 lg:py-28 bg-gradient-to-br from-[#FFF9F0] to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-[#1A3A52]">
            Creating a more inclusive world where everyone has the tools to thrive independently.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] rounded-3xl blur-2xl opacity-20 transform scale-95"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761301006349-e4d7706fa243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwd2hlZWxjaGFpciUyMGFjY2Vzc2liaWxpdHl8ZW58MXx8fHwxNzYyNzk3NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse community using MyAbilities for accessible task management"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB366] to-[#FF9A4D] flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg text-[#1E3A5F] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#1A3A52]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
