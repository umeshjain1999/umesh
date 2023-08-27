import { useFetchContent } from "@/hooks/useFetchContent";
import { PanInfo, motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { CloseIcon } from "./icons";

const Modal = (props: {
  handleModalClick: () => void;
  title: string;
  file: string;
}) => {
  const { handleModalClick, title, file } = props;

  const [modalState, setModalState] = useState<"initial" | "full">("initial");

  const MODAL_MIN_HEIGHT = window.innerHeight * 0.6;
  const MODAL_MAX_HEIGHT = window.innerHeight;
  const content = useFetchContent(file);
  const y = useMotionValue(0);
  const height = useTransform(y, (y) => {
    switch (modalState) {
      case "initial":
        if (MODAL_MIN_HEIGHT - y >= MODAL_MAX_HEIGHT) {
          setModalState("full");
          return `${MODAL_MAX_HEIGHT}px`;
        }
        return `${MODAL_MIN_HEIGHT - y}px`;
      case "full":
        if (y <= 0) {
          return `${MODAL_MAX_HEIGHT}px`;
        } else if (y >= 0 && y <= 100) {
          return `${MODAL_MAX_HEIGHT - y}px`;
        } else {
          setModalState("initial");
          return `${MODAL_MIN_HEIGHT - y}px`;
        }
    }
  });

  const handlePandEnd = (e: PointerEvent, info: PanInfo) => {
    if (info.offset.y < -50) {
      y.set(-1000);
    } else {
      y.set(0);
    }
  };

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
        onPanEnd={handlePandEnd}
        className="absolute bottom-0 left-[50%] !-translate-x-1/2 w-full max-w-[390px] overflow-auto bg-zinc-50 rounded-2xl no-scrollbar shadow-default z-20"
      >
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0}
          className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-100 sticky top-0 after:content-[''] after:absolute after:top-1 after:left-[50%] after:translate-x-[-50%] after:w-8 after:h-1 after:rounded-2xl after:bg-zinc-400"
        >
          <div className="font-bold text-xl text-zinc-900">{title}</div>
          <span onClick={handleModalClick} className="cursor-pointer">
            <CloseIcon />
          </span>
        </motion.div>
        <div className="p-4">
          <div
            className="prose dark:prose-invert"
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
