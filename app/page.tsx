"use client";

import { BubbleMessage } from "@/components/bubble";
import { RightChevronIcon, UpArrowIcon } from "@/components/icons";
import { ImageBlock } from "@/components/image";
import { Modal } from "@/components/modal";
import { variants } from "@/framer-variants";
import { AnimatePresence, motion } from "framer-motion";
import { useReducer } from "react";

export default function Page() {
  const initialState = {
    modalState: false,
    title: "",
    mdFileName: "",
  };
  type ACTION_TYPE =
    | { type: "toggleModal" }
    | { type: "about" }
    | { type: "work" };

  function reducer(state: typeof initialState, action: ACTION_TYPE) {
    switch (action.type) {
      case "toggleModal":
        return { ...state, modalState: !state.modalState };
      case "about":
        return {
          modalState: !state.modalState,
          title: "About Me",
          mdFileName: "about",
        };
      case "work":
        return {
          modalState: !state.modalState,
          title: "Work",
          mdFileName: "work",
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleModalClick = (val?: string) => {
    dispatch({ type: "toggleModal" });
  };
  return (
    <div className="w-full max-w-[390px] flex flex-col items-center relative">
      <div className="flex flex-col items-start w-full mb-4 gap-1">
        <ImageBlock />
        <BubbleMessage custom={2}>Hey, Umesh Jain here</BubbleMessage>
        <BubbleMessage custom={3}>india / developing front-end</BubbleMessage>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          custom={4}
          className="w-[150px] text-sm font-medium cursor-pointer"
          onClick={() => dispatch({ type: "about" })}
        >
          <div className="h-[50px] bg-gradient-to-t from-zinc-300 to-zinc-700 rounded-tr-2xl rounded-tl-2xl"></div>
          <div className="flex items-center justify-between py-2 px-4 rounded-br-2xl rounded-bl-2xl bg-zinc-200 font-semibold">
            <span>About Me</span>
            <RightChevronIcon
              width={18}
              height={18}
              className="text-zinc-500"
            />
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          custom={5}
          className="w-[150px] text-sm font-medium cursor-pointer"
          onClick={() => dispatch({ type: "work" })}
        >
          <div className="h-[50px] bg-gradient-to-t from-zinc-300 to-zinc-700 rounded-tr-2xl rounded-tl-2xl"></div>
          <div className="flex items-center justify-between py-2 px-4 rounded-br-2xl rounded-bl-2xl bg-zinc-200 font-semibold">
            <span>Work</span>
            <RightChevronIcon
              width={18}
              height={18}
              className="text-zinc-500"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-end text-right w-full mb-4 gap-1">
        <BubbleMessage
          custom={6}
          className="bg-blue-600 text-zinc-50 dark:text-zinc-950 flex items-center gap-1"
          asLink
          href={"mailto:ujain2601@gmail.com"}
          target="_blank"
          rel="nofollow"
        >
          <span className="flex-1 text-left">Say Hello</span>
          <UpArrowIcon width={18} height={18} />
        </BubbleMessage>
        <motion.p
          variants={variants}
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          custom={7}
          className="text-xs text-zinc-400"
        >
          email
        </motion.p>
      </div>
      <AnimatePresence>
        {state.modalState && (
          <Modal
            handleModalClick={handleModalClick}
            title={state?.title}
            file={state?.mdFileName}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
