import React from "react";
import { motion } from "framer-motion";
import MapSection from "../../components/Map/MapSection";
import { MapPageDesc, MapPageTitle, TextDiv } from "./MapPageStyles";
import { IoIosArrowDown } from "react-icons/io";

const MapPage = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <TextDiv>
        <MapPageTitle>Come trovarci</MapPageTitle>
        <MapPageDesc>
          La chiesa si trova in <br />
          <span style={{ color: "#FDDA00" }}> NEW ADDRESS </span>
          <br />
          NEW CITY
        </MapPageDesc>
        <IoIosArrowDown color="#FDDA00" size={30} />
      </TextDiv>

      <MapSection />
    </motion.main>
  );
};

export default MapPage;
