import { Spacing, TextColor } from "@components/types";
import { ReactNode } from "react";

export type TextVariant =
  | "footnote"
  | "caption2"
  | "caption"
  | "callout"
  | "body"
  | "bigger";

export type TextLineHeight = "small" | "normal" | "medium" | "large";

export type TextWeight =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export type TextComponent =
  | "p"
  | "span"
  | "strong"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextProps = {
  children: ReactNode;
  lineThrough?: boolean;
  color?: TextColor;
  component?: TextComponent;
  variant?: TextVariant;
  weight?: TextWeight;
  lineHeight?: TextLineHeight;
  centerText?: boolean;
  className?: string | undefined;
  spacing?: Spacing;
};
