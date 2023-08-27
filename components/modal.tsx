import { useFetchContent } from "@/hooks/useFetchContent";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CloseIcon } from "./icons";

const Modal = (props: {
  handleModalClick: () => void;
  title: string;
  file: string;
}) => {
  const MODAL_MIN_HEIGHT = 500;
  const MODAL_MAX_HEIGHT = window.innerHeight;
  const content = useFetchContent(props.file);
  const y = useMotionValue(0);
  const height = useTransform(y, (y) => {
    if (MODAL_MIN_HEIGHT - y >= MODAL_MAX_HEIGHT) {
      return `${MODAL_MAX_HEIGHT}px`;
    }
    return `${MODAL_MIN_HEIGHT - y}px`;
  });

  return (
    <>
      <motion.div
        style={{ height }}
        key="modal"
        initial={{
          height: 0,
        }}
        animate={{
          height: `${MODAL_MIN_HEIGHT}px`,
        }}
        exit={{
          height: 0,
        }}
        transition={{
          type: "spring",
          duration: 0.7,
          bounce: 0.3,
        }}
        onPan={(e, info) => {
          y.set(info.offset.y);
        }}
        onPanEnd={(e, info) => {
          if (info.offset.y < -50) {
            y.set(-300);
          } else {
            y.set(0);
          }
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0}
        className="absolute bottom-0 left-[50%] !-translate-x-1/2 w-full max-w-[390px] overflow-auto bg-zinc-50 rounded-2xl no-scrollbar shadow-default z-20"
      >
        <motion.div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-100 sticky top-0 after:content-[''] after:absolute after:top-1 after:left-[50%] after:translate-x-[-50%] after:w-8 after:h-1 after:rounded-2xl after:bg-zinc-400">
          <div className="font-bold text-xl text-zinc-900">{props.title}</div>
          <span onClick={props.handleModalClick} className="cursor-pointer">
            <CloseIcon />
          </span>
        </motion.div>
        <div className="p-4">
          <div
            className="prose prose-sm lg:prose-base dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-zinc-900 opacity-20 pointer-events-none"></div>
    </>
  );
};

Modal.displayName = "Modal";

export { Modal };
