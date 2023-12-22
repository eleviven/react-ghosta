import { cva } from "class-variance-authority";

export const popup = cva("butalert", {
  variants: {
    size: {
      sm: "butalert--sm",
      md: "butalert--md",
      lg: "butalert--lg",
    },
    alignment: {
      left: "butalert__text--left",
      center: "butalert__text--center",
      right: "butalert__text--right",
    },
  },
  defaultVariants: {
    alignment: "center",
    size: "md",
  },
});
export const popupContent = cva("butalert__content", {
  variants: {
    alignment: {
      left: "butalert__align--start",
      center: "butalert__align--center",
      right: "butalert__align--end",
    },
  },
  defaultVariants: {
    alignment: "center",
  },
});
