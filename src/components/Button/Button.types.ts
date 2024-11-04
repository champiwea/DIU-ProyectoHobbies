import type { Spacing } from "@components/types";
import { ReactNode } from "react";

export type ButtonSize = "tiny" | "small" | "medium" | "puffy" | "huge" | "big";

export type ButtonRole = "primary" | "secondary" | "tertiary" | "danger";

export type ButtonStyle = "filled" | "outlined" | "text";

export type ButtonProps = {
  variant?: ButtonRole;
  style?: ButtonStyle;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  width?: number;
  isFullWidth?: boolean;
  disabled?: boolean;
  onlyIcon?: boolean;
  spacing?: Spacing;
  className?: string | undefined;
  onClick?: () => void;
};
