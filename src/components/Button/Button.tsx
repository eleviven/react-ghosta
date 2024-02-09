import type { ButtonProps } from "./button.type";
import React from "react";
import { buttonExtend } from "./button.variant";
import { cn } from "../../utils/helpers";

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
  classNames,
  isFilled,
  ...props
}) => {
  return (
    <button
      className={cn(
        "butalert__button",
        buttonExtend({ variant, size, classNames }),
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
