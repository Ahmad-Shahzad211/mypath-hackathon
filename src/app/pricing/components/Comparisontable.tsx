"use client";

import { motion } from "framer-motion";
import { competitors } from "@/data/constants";

const ComparisonTable = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 mt-16">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Compare with Other AI Tools
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
        >
          See how we stack up against popular AI assistants in the market.
        </motion.p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm text-left">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold">AI Agent</th>
              <th className="px-6 py-4 font-semibold">Pricing</th>
              <th className="px-6 py-4 font-semibold">Speed</th>
              <th className="px-6 py-4 font-semibold">Accuracy</th>
              <th className="px-6 py-4 font-semibold">Support</th>
              <th className="px-6 py-4 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            {competitors.map((agent, index) => (
              <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                <td className="px-6 py-4 font-medium">{agent.name}</td>
                <td className="px-6 py-4">{agent.pricing}</td>
                <td className="px-6 py-4">{agent.speed}</td>
                <td className="px-6 py-4">{agent.accuracy}</td>
                <td className="px-6 py-4">{agent.support}</td>
                <td className="px-6 py-4">{agent.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
