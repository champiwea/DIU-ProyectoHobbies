import * as React from "react";

const ChevronUp = ({ style, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="size-6"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    style={style}
  >
    <path
      fillRule="evenodd"
      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ChevronUp;
