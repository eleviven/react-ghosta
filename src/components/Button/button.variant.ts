import type { ButtonProps } from "./button.type";
import { cva, cx } from "class-variance-authority";

export const button = cva("", {
  variants: {
    variant: {
      default: "ghosta__button--default",
      primary: "ghosta__button--primary",
      success: "ghosta__button--success",
      danger: "ghosta__button--danger",
    },
    size: {
      sm: "ghosta__button--sm",
      md: "ghosta__button--md",
      lg: "ghosta__button--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

export const buttonExtend = ({ variant, size, classNames }: ButtonProps) => {
  return cx(
    button({ variant, size }),
    cva(classNames?.base, {
      variants: {
        variant: {
          ...classNames?.variants,
        },
        size: {
          ...classNames?.sizes,
        },
      },
    })({ variant, size })
  );
};
