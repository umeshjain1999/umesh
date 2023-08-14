import { motion } from "framer-motion";
import { typingVariants } from "@/framer-variants";

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 1,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1.05,
      }}
      transition={{
        duration: 1,
        delay: 1,
        type: "spring",
        scale: {
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeOut",
        },
      }}
      className="w-fit bg-zinc-200 text-zinc-800 rounded-2xl px-3 py-2.5 text-sm font-medium flex gap-1 items-center"
    >
      <motion.span
        variants={typingVariants}
        initial="initial"
        animate="animate"
        custom={1}
        className="w-2 h-2 inline-block bg-zinc-400 rounded-full opacity-50"
      ></motion.span>
      <motion.span
        variants={typingVariants}
        initial="initial"
        animate="animate"
        custom={2}
        className="w-2 h-2 inline-block bg-zinc-400 rounded-full opacity-50"
      ></motion.span>
      <motion.span
        variants={typingVariants}
        initial="initial"
        animate="animate"
        custom={3}
        className="w-2 h-2 inline-block bg-zinc-400 rounded-full opacity-50"
      ></motion.span>
    </motion.div>
  );
};

export { TypingIndicator };
