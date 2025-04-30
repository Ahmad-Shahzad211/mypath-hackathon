"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { prompts } from "@/data/constants";

const PromptComparisonCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start or stop the auto-slide based on hover state
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % prompts.length);
      }, 3500);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const currentPrompt = prompts[currentIndex];

  return (
    <section className="py-20 px-6 bg-white text-black" id="prompts">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-2 font-promixa">Prompts: Comparison with Different Chatbots</h2>
        <p className="text-lg text-gray-700 font-promixa">
          See how different models respond to the same prompt.
        </p>
        <div className="mt-3 h-[3px] w-24 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div
        className="max-w-4xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-promixa">
              Prompt: {currentPrompt.prompt}
            </h3>

            <div className="space-y-4">
              {Object.entries(currentPrompt.models).map(([model, response]) => (
                <div key={model} className="bg-gray-100 p-4 rounded-md">
                  <p className="font-semibold text-gray-800">{model}:</p>
                  <p className="text-gray-700">{response}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PromptComparisonCarousel;
