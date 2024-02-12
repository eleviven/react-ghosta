import { cva } from 'class-variance-authority';

export const popup = cva('', {
  variants: {
    size: {
      sm: 'ghosta--sm',
      md: 'ghosta--md',
      lg: 'ghosta--lg',
    },
    alignment: {
      left: 'ghosta__text--left',
      center: 'ghosta__text--center',
      right: 'ghosta__text--right',
    },
  },
  defaultVariants: {
    alignment: 'center',
    size: 'md',
  },
});
export const popupContent = cva('', {
  variants: {
    alignment: {
      left: 'ghosta__align--start',
      center: 'ghosta__align--center',
      right: 'ghosta__align--end',
    },
  },
  defaultVariants: {
    alignment: 'center',
  },
});
