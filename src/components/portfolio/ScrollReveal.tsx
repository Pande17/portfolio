import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "fade-up" | "fade-in" | "scale-up" | "stagger-container" | "stagger-item";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className,
  ...props
}: ScrollRevealProps) {
  // If this is a stagger-item, it inherits visibility from the parent container.
  // We do NOT supply initial/whileInView/viewport attributes to it directly.
  const isStaggerItem = variant === "stagger-item";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
        delay: delay,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1],
        delay: delay,
      },
    },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1],
        delay: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const getVariants = () => {
    switch (variant) {
      case "stagger-container":
        return containerVariants;
      case "stagger-item":
        return itemVariants;
      case "fade-in":
        return fadeInVariants;
      case "scale-up":
        return scaleUpVariants;
      case "fade-up":
      default:
        return fadeUpVariants;
    }
  };

  if (isStaggerItem) {
    return (
      <motion.div variants={getVariants()} className={className} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
