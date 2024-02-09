import React from "react";
import { motion } from "framer-motion";
import MapSection from "../../components/Map/MapSection";

const MapPage = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <MapSection />
    </motion.main>
  );
};

export default MapPage;
