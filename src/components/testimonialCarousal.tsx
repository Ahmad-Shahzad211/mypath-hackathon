"use client";

import { useState, useEffect } from "react";
import { testimonial } from "@/data/constants";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = testimonial.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto-switch every 5s
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gray-900 text-white py-16 px-4 md:px-10 text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-500 uppercase text-sm tracking-widest" style={{color:"#1D68FF"}}>{testimonial.title}</h2>
        <h1 className="text-3xl md:text-5xl font-semibold">{testimonial.mainHeading}</h1>
        <p className="max-w-2xl mx-auto text-gray-300">{testimonial.subHeading}</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-6 md:p-10 shadow-lg"
        >
          <p className="text-xl font-light italic mb-6">“{testimonials[currentIndex].feedback}”</p>
          <div className="font-medium">
            <span>{testimonials[currentIndex].name}</span> &mdash;{" "}
            <span className="text-pink-400">{testimonials[currentIndex].role}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
