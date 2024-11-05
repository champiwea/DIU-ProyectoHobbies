import * as React from "react";

const Check = ({ size, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="size-6"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    style={style}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Check;