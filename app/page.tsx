"use client";

import { BubbleMessage } from "@/components/bubble";
import { RightChevronIcon, UpArrowIcon,AboutIcon,WorkIcon } from "@/components/icons";
import { ImageBlock } from "@/components/image";
import { TypingIndicator } from "@/components/typing";
import { variants } from "@/framer-variants";
import { useFetchContent } from "@/hooks/useFetchContent";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Drawer } from 'vaul';

const LeftWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start w-full mb-4 gap-1">
      {children}
    </div>
  );
};
const RightWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-end text-right w-full mb-4 gap-1">
      {children}
    </div>
  );
};

export default function Page() {
  const [type,setType] = useState("about")

  return (
    <Drawer.Root shouldScaleBackground>
      <div className="w-full max-w-[390px] flex flex-col items-center">
        <LeftWrapper>
          <ImageBlock />
          <BubbleMessage custom={2}>Hey, Umesh Jain here</BubbleMessage>
          <BubbleMessage custom={3}>india / developing front-end</BubbleMessage>
          <Drawer.Trigger
            onClick={() => setType("about")}
            asChild
          >
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              whileTap="whileTap"
              custom={4}
              className="w-[150px] text-sm font-medium cursor-pointer"
            >
              <div className="flex items-center justify-start p-2 pr-6 rounded-2xl bg-zinc-200 font-semibold gap-2 relative">
                <AboutIcon width={26} height={26} className="text-zinc-500"/>
                <span className="text-base font-bold">About Me</span>
                <RightChevronIcon
                  width={18}
                  height={18}
                  className="text-zinc-500 absolute right-2 top-1/2 translate-y-[-50%]"
                />
              </div>
            </motion.div>
          </Drawer.Trigger>
          <Drawer.Trigger
            onClick={() => setType("work")}
            asChild
          >
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              whileTap="whileTap"
              custom={5}
              className="w-[150px] text-sm font-medium cursor-pointer"
            >
              <div className="flex items-center justify-start p-2 pr-6 rounded-2xl bg-zinc-200 font-semibold gap-2 relative">
                <WorkIcon width={26} height={26} className="text-zinc-500"/>
                <span className="text-base font-bold">Work</span>
                <RightChevronIcon
                  width={18}
                  height={18}
                  className="text-zinc-500 absolute right-2 top-1/2 translate-y-[-50%]"
                />
              </div>
            </motion.div>
          </Drawer.Trigger>
        </LeftWrapper>
        <RightWrapper>
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
        </RightWrapper>
        <LeftWrapper>
          <TypingIndicator />
        </LeftWrapper>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-zinc-700/40"/>
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="w-full mx-auto flex flex-col overflow-auto rounded-t-[10px] no-scrollbar">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mt-2" />
              {/* sticky top-0 after:content-[''] after:absolute after:top-1 after:left-[50%] after:translate-x-[-50%] after:w-8 after:h-1 after:rounded-2xl after:bg-zinc-300 */}
              <div className="flex items-center justify-between p-4 bg-zinc-100 dark:bg-zinc-100">
                <div className="font-bold text-xl text-zinc-900">{type === "about" ? "About Me" : "Work"}</div>
                {/* <span className="cursor-pointer">
                  <CloseIcon />
                </span> */}
              </div>
              <div
                className="prose dark:prose-invert p-4 min-w-full"
                dangerouslySetInnerHTML={{ __html: useFetchContent(type) }}
              />
            </div>
          </Drawer.Content>
        </Drawer.Portal>

      </div>
    </Drawer.Root>
  );
}
