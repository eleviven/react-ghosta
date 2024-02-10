import type { ButalertPopupHeaderProps } from './popup.type';
import React, { useContext } from 'react';
import { PopupContext } from './Popup';
import { cn } from '../../utils/helpers';

const PopupHeader: React.FC<ButalertPopupHeaderProps> = ({
  title,
  description,
}) => {
  const { classNames } = useContext(PopupContext);
  if (!title || !description) return null;

  return (
    <div className={cn('butalert__header', classNames?.panelHeader)}>
      {title ? (
        <div className={cn('butalert__header__title', classNames?.title)}>
          {title}
        </div>
      ) : null}
      {description ? (
        <div className={cn('butalert__header__desc', classNames?.description)}>
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default PopupHeader;
