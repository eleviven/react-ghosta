import type { ButtonProps } from './button.type';

import React from 'react';

import Spinner from '../Spinner/Spinner';

import { cn } from '../../utils/helpers';
import { buttonExtend } from './button.variant';

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
  classNames,
  isFilled,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={cn(
        'ghosta__button',
        buttonExtend({ variant, size, classNames }),
        isFilled && 'ghosta__button--filled',
        className
      )}
      {...props}
    >
      {children}
      {isLoading ? (
        <span className="ghosta__button__spinner">
          <Spinner />
        </span>
      ) : null}
    </button>
  );
};

export default Button;
