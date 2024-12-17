"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Star, Users, BarChart } from "lucide-react";
import Feature from "./Feature";

const featuresData = [
  {
    title: "Learn What You Need, Fast",
    description:
      "Find experts ready to teach the skills you care about. No fluff, just results.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Teach and Inspire",
    description:
      "Share your knowledge, grow your impact, and connect with eager learners.",
    icon: Star,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Interactive, Social Learning",
    description:
      "Live sessions, real conversations—because learning happens best together.",
    icon: Users,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Track Your Progress",
    description:
      "Stay motivated with clear milestones and feedback after every session.",
    icon: BarChart,
    color: "from-orange-500 to-amber-400",
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Embark on Your Learning Journey
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuresData.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
