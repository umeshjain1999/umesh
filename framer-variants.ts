export const variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: (i: number) => {
    const delay = i * 0.1;
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
        type: "spring",
      },
    };
  },
  whileTap: {
    scale: 1.05,
  },
};