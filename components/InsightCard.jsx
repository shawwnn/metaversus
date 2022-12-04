'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title,
subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex mg:flex-row flex-col gap-4"

  >
    <img src={imgUrl} alt="planet-01" 
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-secondary-white">{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
