import React from "react";
import { motion } from "framer-motion";
import MapSection from "../../components/Map/MapSection";
import Ticker from "../../components/Ticker/Ticker";
import { MapPageDesc, MapPageTitle, TextDiv } from "./MapPageStyles";
import { IoIosArrowDown } from "react-icons/io";

const MapPage = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <TextDiv>
        <MapPageTitle>Come trovarci</MapPageTitle>
        <MapPageDesc>
          La chiesa si trova in <br />
          <span style={{ color: "#FDDA00" }}>via Carlo Serassi 6B </span>
          <br />
          Bergamo (BG)
        </MapPageDesc>
        <IoIosArrowDown color="#FDDA00" size={30} />
      </TextDiv>

      <MapSection />
      <Ticker />
    </motion.main>
  );
};

export default MapPage;
