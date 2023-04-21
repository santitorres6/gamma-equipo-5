import React from "react";
import { motion } from "framer-motion";
import { Toggle } from "../../components/atoms/Toggle/Toggle";
import "./Donaciones.scss";

export const Donaciones = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    // >
    <main className="donations">
      <Toggle />
    </main>
    // </motion.div>
  );
};
