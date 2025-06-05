import { easeInOut, motion } from "framer-motion";

export const SplitAnimate = ({
  text,
  delay = 0,
  whileView = false,
}: {
  text: string;
  delay?: number;
  whileView?: boolean;
}) => {
  const animateVariant = {
    opacity: 1,
    y: 0,
  };
  return (
    <div className="overflow-hidden text-9xl p-3.5 text-left">
      {text.split("").map((ch, i) => {
        console.log(ch);
        if (ch === " ") {
          ch = "\u00A0";
        }
        return (
          <motion.span
            key={i}
            whileHover={{
              scale: 1.3,
              rotate: Math.random() * 10 - 5,
              x: Math.random() * 30 - 15,
              y: Math.random() * 30 - 15,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            }}
            initial={{
              opacity: 0,
              y: 150,
            }}
            animate={animateVariant}
            whileInView={animateVariant}
            transition={{
              duration: 0.3,
              ease: easeInOut,
              delay: delay + 0.03 * i,
            }}
            className={`text-9xl font-extrabold tracking-tight inline-block text-left`}
          >
            {ch}
          </motion.span>
        );
      })}
    </div>
  );
};

export const SplitAnimateView = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const childVariants = {
    initial: {
      opacity: 0,
      y: 150,
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        delay: delay + 0.03,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.7 }}
      className="overflow-hidden text-9xl p-3.5 text-left"
    >
      {text.split("").map((ch, i) => {
        console.log(ch);
        if (ch === " ") {
          ch = "\u00A0";
        }
        return (
          <motion.span
            key={i}
            whileHover={{
              scale: 1.3,
              rotate: Math.random() * 10 - 5,
              x: Math.random() * 30 - 15,
              y: Math.random() * 30 - 15,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            }}
            variants={childVariants}
            className={`text-9xl font-extrabold tracking-tight inline-block text-left`}
          >
            {ch}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
