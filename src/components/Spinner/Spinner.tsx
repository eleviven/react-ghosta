import React, { type SVGProps } from "react";

const Spinner: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <style>
      {
        "@keyframes spinner_MGfb{93.75%,to{opacity:.2}}.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}"
      }
    </style>
    <circle cx={4} cy={12} r={3} className="spinner_S1WN" />
    <circle
      cx={12}
      cy={12}
      r={3}
      className="spinner_S1WN"
      style={{
        animationDelay: "-.65s",
      }}
    />
    <circle
      cx={20}
      cy={12}
      r={3}
      className="spinner_S1WN"
      style={{
        animationDelay: "-.5s",
      }}
    />
  </svg>
);
export default Spinner;
