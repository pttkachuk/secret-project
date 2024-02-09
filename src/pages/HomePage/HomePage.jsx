import React from "react";
import Hero from "../../components/Hero/Hero";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Hero />
    </motion.main>
  );
};

export default HomePage;
