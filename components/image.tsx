import { motion } from "framer-motion";
import { variants } from "@/framer-variants";
import Image from "next/image";

export const ImageBlock = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      whileTap="whileTap"
      whileFocus="whileHover"
      custom={1}
      className="w-[200px] h-[250px] relative"
    >
      <Image
        src={"/images/okay.jpg"}
        alt="umesh"
        fill={true}
        className="object-cover rounded-2xl"
        sizes="200px"
        priority
      />
    </motion.div>
  );
};
