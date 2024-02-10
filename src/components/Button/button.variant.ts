import type { ButtonProps } from './button.type';
import { cva, cx } from 'class-variance-authority';

export const button = cva('', {
  variants: {
    variant: {
      default: 'butalert__button--default',
      primary: 'butalert__button--primary',
      success: 'butalert__button--success',
      danger: 'butalert__button--danger',
    },
    size: {
      sm: 'butalert__button--sm',
      md: 'butalert__button--md',
      lg: 'butalert__button--lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
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
