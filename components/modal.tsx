import { motion } from "framer-motion";
import { CloseIcon } from "./icons";
import { useFetchContent } from "@/hooks/useFetchContent";

const Modal = (props: {
  handleModalClick: () => void;
  title: string;
  file: string;
}) => {
  const content = useFetchContent(props.file);
  return (
    <motion.div
      key="modal"
      initial={{
        height: 0,
      }}
      animate={{
        height: "90%",
        transition: {
          type: "spring",
          duration: 0.7,
          bounce: 0.3,
        },
      }}
      exit={{
        height: 0,
      }}
      className="absolute bottom-0 left-0 w-full overflow-auto bg-zinc-50 rounded-2xl no-scrollbar shadow-md shadow-zinc-200 dark:shadow-zinc-100"
    >
      <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-100 sticky top-0">
        <div className="font-bold text-xl text-zinc-900">{props.title}</div>
        <span onClick={props.handleModalClick} className="cursor-pointer">
          <CloseIcon />
        </span>
      </div>
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
