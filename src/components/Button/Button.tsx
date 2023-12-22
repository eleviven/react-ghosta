import type { ButtonProps } from "./button.type";
import React from "react";
import { buttonExtend } from "./button.variant";
import { cn } from "../../utils/helpers";

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
  theme,
  isFilled,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonExtend({ variant, size, theme }),
        isFilled && "butalert__button--filled",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
