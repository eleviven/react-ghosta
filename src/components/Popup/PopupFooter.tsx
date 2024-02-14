import type { GhostaPopupFooterProps } from './popup.type';
import type {
  GhostaButtonActionParams,
  GhostaButtonOptions,
} from '../../types';

import * as React from 'react';
import { cx } from 'class-variance-authority';

import { PopupContext } from './Popup';
import Button from '../Button/Button';

import { isAsync } from '../../utils/helpers';

const PopupFooter: React.FC<GhostaPopupFooterProps> = ({ buttons }) => {
  const { onClose, classNames, id: popupId } = React.useContext(PopupContext);
  const [loadingIds, setLoadingIds] = React.useState<Record<number, boolean>>({});

  const handleChangeLoadingIds = (id: number, value: boolean) => {
    setLoadingIds((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (button: GhostaButtonOptions, index: number) => {
    const params: GhostaButtonActionParams = {
      popupId,
      onClose,
    };

    if (isAsync(button.onClick!)) {
      try {
        handleChangeLoadingIds(index, true);
        await button.onClick?.(params);
      } finally {
        if (!button.preventClose) onClose?.();
        handleChangeLoadingIds(index, false);
      }
    } else {
      if (!button.preventClose) onClose?.();
      button.onClick?.(params);
    }
  };

  if (!buttons?.length) return null;

  return (
    <div className={cx('ghosta__footer', classNames?.panelFooter)}>
      {buttons?.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          size={button.size}
          isFilled={button.isFilled}
          isLoading={loadingIds[index]}
          classNames={classNames?.button}
          onClick={() => handleClick(button, index)}
        >
          {button.title}
        </Button>
      ))}
    </div>
  );
};

export default PopupFooter;
