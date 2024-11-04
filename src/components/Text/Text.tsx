import cn from "classnames";
import { ReactElement } from "react";

import type { TextProps } from "./Text.types";

import s from "./Text.module.css";

const Text = ({
  children,
  weight = "regular",
  variant = "body",
  lineHeight = "normal",
  lineThrough = false,
  className,
  color = "black",
  component = "p",
  centerText = false,
  spacing,
}: TextProps): ReactElement => {
  const Tag = component as keyof JSX.IntrinsicElements;
  const classElement = cn(
    s.text,
    className,
    s[`lineHeight-${lineHeight}`],
    s[`font-${variant}`],
    s[`weight-${weight}`],
    s[`color-${color}`],
    {
      [`spacing-${spacing}`]: !!spacing,
      [s.strikeThrough]: lineThrough,
      [s.centerText]: centerText,
    }
  );

  return <Tag className={classElement}>{children}</Tag>;
};

export default Text;
