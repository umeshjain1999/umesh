import { SVGProps } from "react";
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x-circle bg-zinc-200 rounded-full transition-all hover:scale-110"
    {...props}
  >
    <path d="m15 9-6 6m0-6 6 6" className="text-zinc-400" />
  </svg>
);
