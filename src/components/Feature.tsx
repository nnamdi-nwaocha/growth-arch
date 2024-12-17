"use client";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

export default function Feature({
  title,
  description,
  icon: Icon,
  color,
  index,
}: FeatureProps) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 200, delay: 0.2 },
    },
  };

  const [fromColor, toColor] = color.split(" ");

  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
      variants={variants}
    >
      <div className="flex items-center mb-6">
        <div className={`mr-6`}>
          <Icon className={`w-12 h-12 ${fromColor} ${toColor}`} />
        </div>
        <motion.h3
          className={`text-2xl font-semibold bg-gradient-to-r ${fromColor} ${toColor} bg-clip-text text-transparent`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      <motion.div
        className={`h-1 w-0 bg-gradient-to-r ${color} mt-6`}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
