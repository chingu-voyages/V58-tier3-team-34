/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-blue-50 text-gray-800 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4
           bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight leading-tight"
      >
        Chingu Demographics App
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-center max-w-xl mb-10 text-slate-600"
      >
        Explore demographic data about Chingu members from around the world.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-4 text-center max-w-md mb-12"
      >
        <p className="text-slate-600 text-base md:text-lg">
          Interactive world map
        </p>
        <p className="text-slate-600 text-base md:text-lg">List view</p>
        <p className="text-slate-600 text-base md:text-lg">Filtering tools</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4">
        <Button
          size="lg"
          className="rounded-xl px-8 py-6 text-lg cursor-pointer bg-purple-300 hover:bg-purple-400 text-slate-700 shadow-sm"
        >
          <a href="/map">Explore Map</a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-xl px-8 py-6 text-lg cursor-pointer border-purple-300 text-slate-700 hover:bg-purple-100 shadow-sm"
        >
          <a href="/list">View List</a>
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
