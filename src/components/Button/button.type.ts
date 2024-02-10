import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';
import type { ButalertPopupClassNames } from '../Popup/popup.type';
import { button } from './button.variant';

export type ButtonVariant = 'default' | 'primary' | 'success' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof button> & {
    children?: React.ReactNode;
    classNames?: ButalertPopupClassNames['button'];
    isFilled?: boolean;
    isLoading?: boolean;
  };
