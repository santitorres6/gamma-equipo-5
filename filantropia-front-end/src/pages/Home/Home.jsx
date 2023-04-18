import React, { useContext, useState } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { VideosCarousel } from "../../components/molecules/VideosCarousel/VideosCarousel";
import { motion } from "framer-motion";
import { MoreHomePage } from "../../components/organisms/MoreHomePage/MoreHomePage";
import { Causes} from "../../components/organisms/Causes/Causes";
import { Initiatives } from "../../components/organisms/Initiatives/Initiatives"

import "./Home.scss";

export const Home = () => {
  const { HOME_PAGE } = useContext(DataContext);
  const { carrousel, more } = HOME_PAGE;

  const { carrousel, more,ourCauses, initiatives } = HOME_PAGE;
  const { videos, button } = carrousel;
  

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VideosCarousel videos={videos} button={button} />
      <Causes causes ={ourCauses} />
      <Initiatives initiatives ={initiatives} />
      <MoreHomePage {...more} />
    </motion.main>
  );
};
