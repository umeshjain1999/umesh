import * as React from "react";
import { SVGProps } from "react";
export const UpArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-up-right"
    {...props}
  >
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);
