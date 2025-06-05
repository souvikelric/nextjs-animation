import { motion } from "framer-motion";
import { SplitAnimateView } from "./SplitAnimate";
import Image from "next/image";
import Image1 from "../../public/pic1.jpg";

export const Section2 = () => {
  return (
    <div className="section-1 h-[100vh] w-[100vw] overflow-hidden bg-blue-950">
      <div className="flex p-11 items-center justify-center gap-20">
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          whileInView={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="h-[50vh] w-[70vw] relative"
        >
          <Image src={Image1} alt="image1" priority fill />
        </motion.div>
        <div className="h-[100vh] w-full flex flex-col items-start justify-center cursor-pointer">
          <SplitAnimateView text="Animation" />
          <SplitAnimateView text="Examples" />
          <motion.p
            initial={{ x: -20, opacity: 0, filter: "blur(20px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
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
