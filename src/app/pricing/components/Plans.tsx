"use client";

import Link from "next/link";
import { pricingPlans } from "@/data/constants";
import { motion } from "framer-motion";

const Plans = () => {
  return (
    <section className="relative z-9 py-24 px-6 bg-white dark:bg-gray-900" style={{height:"90vh"}}>
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Flexible Pricing for Everyone
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
        >
          Choose a plan that works best for your learning style and budget.
        </motion.p>

        {/* Animated Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 h-[3px] w-32 bg-[#1d68ff] mx-auto origin-left rounded-full"
        />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative rounded-xl p-8 border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ${
              plan.recommended ? "border-blue-600 dark:border-blue-400" : ""
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-full shadow-lg">
                  Bhai ki mano, aur ye subscription lo!
                </span>
              </div>
            )}

            {/* Title with Animated Hover Underline */}
            <div className="relative group mb-6 pb-3 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {plan.title}
              </h3>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] w-10 bg-[#1d68ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </div>

            {/* Price Circle */}
            <div className="relative w-24 h-24 mx-auto my-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 animate-pulse blur-xl opacity-30"></div>
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
                {plan.price}
              </div>
            </div>

            {/* Features */}
            <ul className="text-left space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-gray-300 text-sm flex gap-2 items-center"
                >
                  • {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="#"
              className="relative inline-block px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full z-0" />
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                {plan.buttonText}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
 
    </section>
  );
};

export default Plans;
