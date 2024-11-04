import cn from "classnames";
import { CSSProperties, ReactElement } from "react";

import type { ButtonProps } from "./Button.types";

import s from "./Button.module.css";

const Button = ({
  children,
  icon,
  width,
  disabled,
  spacing,
  className,
  href,
  style = "filled",
  isFullWidth = false,
  type = "button",
  onlyIcon = false,
  variant = "primary",
  size = "medium",
  onClick,
}: ButtonProps): ReactElement => {
  const buttonStyles: CSSProperties = {
    width: width && !isFullWidth ? `${width}px` : undefined,
  };
  const buttonClass = cn(s.button, className, s[variant], s[style], s[size], {
    [s.withIcon]: !!icon,
    [s.onlyIcon]: onlyIcon,
    [s.fullWidth]: isFullWidth,
    [`spacing-${spacing}`]: !!spacing,
  });

  const buttonContent = (
    <>
      {icon && <div className={s.icon}>{icon}</div>}
      {!onlyIcon && children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} style={buttonStyles}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
