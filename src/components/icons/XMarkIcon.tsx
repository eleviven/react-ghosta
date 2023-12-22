import React, { type SVGProps } from "react";

const XMarkIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
};

export default XMarkIcon;
