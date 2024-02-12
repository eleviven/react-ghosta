import type { GhostaPopupHeaderProps } from './popup.type';
import React, { useContext } from 'react';
import { PopupContext } from './Popup';
import { cn } from '../../utils/helpers';

const PopupHeader: React.FC<GhostaPopupHeaderProps> = ({
  title,
  description,
}) => {
  const { classNames } = useContext(PopupContext);
  if (!title || !description) return null;

  return (
    <div className={cn('ghosta__header', classNames?.panelHeader)}>
      {title ? (
        <div className={cn('ghosta__header__title', classNames?.title)}>
          {title}
        </div>
      ) : null}
      {description ? (
        <div className={cn('ghosta__header__desc', classNames?.description)}>
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default PopupHeader;
