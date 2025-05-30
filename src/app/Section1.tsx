import { motion } from "framer-motion";
import { SplitAnimate } from "./SplitAnimate";
import Image from "next/image";
import Image1 from "../../public/pic1.jpg";

export const Section1 = () => {
  return (
    <div className="section-1 h-[100vh] w-[100vw] overflow-hidden">
      <div className="flex p-11 items-center justify-center gap-20">
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="h-[50vh] w-[70vw] relative"
        >
          <Image src={Image1} alt="image1" priority fill />
        </motion.div>
        <div className="h-[100vh] w-full flex flex-col items-start justify-center cursor-pointer">
          <SplitAnimate text="Framer" delay={0.4} />
          <SplitAnimate text="Animation" delay={0.5} />
          <motion.p
            initial={{ x: -20, opacity: 0, filter: "blur(20px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            className="text-amber-300 text-2xl ml-5 mt-8"
          >
            Hover over text to animate
          </motion.p>
        </div>
      </div>
    </div>
  );
};
