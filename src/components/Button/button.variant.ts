import type { ButtonProps } from "./button.type";
import { cva, cx } from "class-variance-authority";

export const button = cva("butalert__button", {
  variants: {
    variant: {
      default: "butalert__button--default",
      primary: "butalert__button--primary",
      success: "butalert__button--success",
      danger: "butalert__button--danger",
    },
    size: {
      sm: "butalert__button--sm",
      md: "butalert__button--md",
      lg: "butalert__button--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

export const buttonExtend = ({ variant, size, theme }: ButtonProps) => {
  return cx(
    button({ variant, size }),
    cva(theme?.base, {
      variants: {
        variant: {
          ...theme?.variants,
        },
        size: {
          ...theme?.sizes,
        },
      },
    })({ variant, size })
  );
};
