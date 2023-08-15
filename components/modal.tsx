import { useFetchContent } from "@/hooks/useFetchContent";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CloseIcon } from "./icons";

const Modal = (props: {
  handleModalClick: () => void;
  title: string;
  file: string;
}) => {
  const RESIZABLE_DEFAULT_HEIGHT = 300;
  const content = useFetchContent(props.file);
  const y = useMotionValue(0);
  const height = useTransform(y, (y) => {
    if (RESIZABLE_DEFAULT_HEIGHT - y >= 580) {
      return "580px";
    }
    return `${RESIZABLE_DEFAULT_HEIGHT - y}px`;
  });

  return (
    <motion.div
      style={{ height }}
      key="modal"
      initial={{
        height: 0,
      }}
      animate={{
        height: "300px",
      }}
      exit={{
        height: 0,
      }}
      transition={{
        type: "spring",
        duration: 0.7,
        bounce: 0.3,
      }}
      className="absolute bottom-0 left-0 w-full overflow-auto bg-zinc-50 rounded-2xl no-scrollbar shadow-md shadow-zinc-200 dark:shadow-zinc-100"
    >
      <motion.div
        onPan={(e, info) => y.set(info.offset.y)}
        onPanEnd={(e, info) => {
          if (info.offset.y < -50) {
            y.set(-280);
          } else {
            y.set(0);
          }
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0}
        className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-100 sticky top-0 after:content-[''] after:absolute after:top-1 after:left-[50%] after:translate-x-[-50%] after:w-8 after:h-1 after:rounded-2xl after:bg-zinc-400"
      >
        <div className="font-bold text-xl text-zinc-900">{props.title}</div>
        <span onClick={props.handleModalClick} className="cursor-pointer">
          <CloseIcon />
        </span>
      </motion.div>
      <div className="p-4">
        <div
          className="prose prose-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </motion.div>
  );
};

Modal.displayName = "Modal";

export { Modal };
