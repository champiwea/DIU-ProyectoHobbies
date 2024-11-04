import { COLORS } from "./constants";

type Spacing =
  | "micro"
  | "tiny"
  | "small"
  | "medium"
  | "semi"
  | "large"
  | "x-large"
  | "2x-large"
  | "3x-large"
  | "4x-large";

type TextColor = (typeof COLORS)[number];

type SVGIconProps = {
  size: number;
  strokeWidth?: number;
  color?: string;
};

export type { Spacing, SVGIconProps, TextColor };

