import * as React from "react";

const Add = ({ style, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={style}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    ></path>
  </svg>
);

export default Add;
