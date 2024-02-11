import type { GhostaPopupFooterProps } from "./popup.type";
import type {
  GhostaButtonActionParams,
  GhostaButtonOptions,
} from "../../types";

import React, { useContext, useState } from "react";

import { PopupContext } from "./Popup";
import Button from "../Button/Button";

import { cn, isAsync } from "../../utils/helpers";

const PopupFooter: React.FC<GhostaPopupFooterProps> = ({ buttons }) => {
  const { onClose, classNames, id: popupId } = useContext(PopupContext);
  const [loadingIds, setLoadingIds] = useState<Record<number, boolean>>({});

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
    <div className={cn("ghosta__footer", classNames?.panelFooter)}>
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
