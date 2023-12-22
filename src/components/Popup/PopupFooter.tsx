import type { ButalertPopupFooterProps } from "./popup.type";
import type { ButalertButtonOptions } from "../../butalert.types";

import React, { useContext } from "react";
import { cn } from "../../utils/helpers";

import { PopupContext } from "./Popup";
import Button from "../Button/Button";

import { ButalertManager } from "../../ButalertManager";

const PopupFooter: React.FC<ButalertPopupFooterProps> = ({ buttons }) => {
  const { onClose, theme } = useContext(PopupContext);

  if (!buttons?.length) return null;

  const handleClick = (button: ButalertButtonOptions) => {
    if (!button.preventClose) {
      onClose?.();
    }
    button.onClick?.({ butalert: ButalertManager.get() });
  };

  return (
    <div className={cn("butalert__footer", theme?.panelFooter)}>
      {buttons?.map((button, index) => {
        return (
          <Button
            key={index}
            variant={button.variant}
            size={button.size}
            isFilled={button.isFilled}
            onClick={() => handleClick(button)}
            theme={theme?.button}
          >
            {button.title}
          </Button>
        );
      })}
    </div>
  );
};

export default PopupFooter;
