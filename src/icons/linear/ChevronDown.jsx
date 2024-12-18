import * as React from "react";

const ChevronDown = ({ style, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="size-6"
    style={style}
    height={size}
    width={size}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ChevronDown;
