'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initital="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        {/* test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br /> */}
        <div className="feedback-gradient"/>
        <div>
          <h4 className="mt-20 font-bold text-white sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">Samantha</h4>
          <p>Founder Metaverus</p>
          <p>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </div>
      </motion.div>
    </motion.div>
  </section>

  // Founder Metaverus
  // “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
);

export default Feedback;
