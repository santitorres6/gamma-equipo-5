import React, { useContext } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { VideosCarousel } from "../../components/VideosCarousel/VideosCarousel";
import { motion } from "framer-motion";
import "./Home.scss";

export const Home = () => {
  const { homePage } = useContext(DataContext);
  const { carrousel } = homePage;
  const { videos, button } = carrousel;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VideosCarousel videos={videos} button={button} />
    </motion.div>
  );
};
