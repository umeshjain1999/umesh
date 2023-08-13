import { motion } from "framer-motion";
import { cn } from "@/utils";
import { variants } from "@/app/page";

type BUBBLE_MSG_TYPE = {
  children: React.ReactNode;
  className?: string;
  custom: number;
  asLink?: boolean;
};

type BUBBLE_AS_LINK = BUBBLE_MSG_TYPE &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type BUBBLE_PROP = BUBBLE_MSG_TYPE | BUBBLE_AS_LINK;

const BubbleMessage = (props: BUBBLE_PROP) => {
  const { children, className, custom = 0, asLink = false, ...rest } = props;
  if (asLink) {
    return (
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        whileTap="whileTap"
        custom={custom}
        className="max-w-[80%] w-fit font-medium text-sm"
      >
        <a
          className={cn(
            "px-3 py-1 rounded-2xl bg-zinc-200 text-zinc-800",
            className
          )}
          {...rest}
        >
          {children}
        </a>
      </motion.div>
    );
  }
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      whileTap="whileTap"
      custom={custom}
      className={cn(
        "max-w-[80%] w-fit bg-zinc-200 text-zinc-800 rounded-2xl px-3 py-1 text-sm font-medium",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

BubbleMessage.displayName = "BubbleMessage";

export { BubbleMessage };
