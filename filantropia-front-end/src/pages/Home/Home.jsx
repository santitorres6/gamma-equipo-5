import React, { useContext } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { VideosCarousel } from "../../components/molecules/VideosCarousel/VideosCarousel";
import { motion } from "framer-motion";
import { MoreHomePage } from "../../components/organisms/MoreHomePage/MoreHomePage";
import "./Home.scss";

export const Home = () => {
  const { homePage } = useContext(DataContext);
  const { carrousel, more } = homePage;
  const { videos, button } = carrousel;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VideosCarousel videos={videos} button={button} />
      <MoreHomePage {...more} />
    </motion.main>
  );
};
