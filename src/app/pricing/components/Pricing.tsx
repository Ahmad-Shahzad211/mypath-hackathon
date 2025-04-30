"use client";

import {motion} from "framer-motion";
import Plans from "./Plans";
import ComparisonTable from "./Comparisontable";

export default function PricingTables() {
  const scrollToPlans = () => {
    const element = document.getElementById("plans-section");
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative bg-white text-black font-proxima !dark:bg-white !dark:text-black">
        <motion.h1
          className="text-5xl font-extrabold font-proxima"
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8}}
        >
          Simple, Transparent Pricing
        </motion.h1>

        <motion.p
          className="text-lg mt-6 max-w-xl font-proxima"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.3}}
        >
          No hidden fees. No surprises. Just powerful features to help you grow.
        </motion.p>

        <div className="heading my-2 text-center">
          <motion.p
            className="text-xl pt-5 font-proxima"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            Choose the plan that fits your needs
          </motion.p>
        </div>

        <motion.div
          className="mt-12"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.6}}
        >
          <button
            onClick={scrollToPlans}
            className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300 font-proxima"
          >
            See Monthly Plans ↓
          </button>
        </motion.div>
      </section>
      {/* Pricing Section */}
      <section id="plans-section" className="my-5">
        {/* <div className="heading my-20 text-center">
          <motion.h2
            className="text-4xl font-bold text-black-600 dark:text-dark"
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            Our Pricing
          </motion.h2>
          <motion.p
            className="text-xl pt-5 text-gray-500 dark:text-gray-300"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            Choose the plan that fits your needs
          </motion.p>
        </div> */}

        {/* Pricing Toggle */}
        {/* <div className="flex justify-center max-w-[14rem] m-auto my-8 lg:mb-16">
          <div className="relative border border-blue-500 px-10 py-2 rounded-full">
            <button
              onClick={scrollToPlans}
              className="text-blue-500 transition-colors duration-150 ease-in-out"
            >
              Monthly
            </button>
          </div>
        </div> */}
        <Plans />

        <ComparisonTable/>
      </section>
    </>
  );
}
