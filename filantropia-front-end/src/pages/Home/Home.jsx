import React, { useContext, useState } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { VideosCarousel } from "../../components/molecules/VideosCarousel/VideosCarousel";
import { motion } from "framer-motion";
import { MoreHomePage } from "../../components/organisms/MoreHomePage/MoreHomePage";
import "./Home.scss";

export const Home = () => {
  const { HOME_PAGE } = useContext(DataContext);
  const { carrousel, more } = HOME_PAGE;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VideosCarousel {...carrousel} />
      <MoreHomePage {...more} />
    </motion.main>
  );
};