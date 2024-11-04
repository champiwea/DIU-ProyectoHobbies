import { Spacing, TextColor } from "@components/types";
import cn from "classnames";
import { HTMLProps, ReactElement, ReactNode } from "react";

import s from "./Heading.module.css";

export type HeadingVariant =
  | "subheadline"
  | "headline"
  | "title3"
  | "title2"
  | "title1"
  | "large-title"
  | "bigtitle3"
  | "bigtitle2";

export type HeadingWeight =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export type HeadingProps = {
  children: ReactNode;
  rank?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: HeadingVariant;
  spacing?: Spacing;
  weight?: HeadingWeight;
  centerText?: boolean;
  color?: TextColor;
} & Omit<HTMLProps<HTMLHeadingElement>, "size">;

const Heading = ({
  rank = 2,
  children,
  variant = "title2",
  weight = "medium",
  color = "black",
  centerText = false,
  spacing,
}: HeadingProps): ReactElement => {
  const Tag = (rank > 6 ? "h6" : `h${rank}`) as keyof JSX.IntrinsicElements;

  return (
    <Tag
    
      className={cn(
        s.heading,
        s[`font-${variant}`],
        s[weight],
        s[`text-color-${color}`],
        {
          [s.centerText]: centerText,
          [`spacing-${spacing}`]: !!spacing,
        }
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
