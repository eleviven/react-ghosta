import type { GhostaPopupHeaderProps } from './popup.type';
import * as React from 'react';
import { cx } from 'class-variance-authority';
import { PopupContext } from './Popup';

const PopupHeader: React.FC<GhostaPopupHeaderProps> = ({
  title,
  description,
}) => {
  const { classNames } = React.useContext(PopupContext);
  if (!title && !description) return null;

  return (
    <div className={cx('ghosta__header', classNames?.panelHeader)}>
      {title ? (
        <div className={cx('ghosta__header__title', classNames?.title)}>
          {title}
        </div>
      ) : null}
      {description ? (
        <div className={cx('ghosta__header__desc', classNames?.description)}>
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default PopupHeader;
