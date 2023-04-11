import React from "react";
import { motion } from "framer-motion";
import "./Testimonios.scss";

export const Testimonios = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Testimonios
    </motion.div>
  );
};
