import type { ButalertPopupBodyProps } from "./popup.type";

import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

import { PopupContext } from "./Popup";
import { popupContent } from "./popup.variant";
import { cn } from "../../utils/helpers";

const PopupBody: React.FC<ButalertPopupBodyProps> = ({
  title,
  description,
  icon,
}) => {
  const { alignment, theme } = useContext(PopupContext);

  if (!title && !description && !icon) {
    return <div className="butalert__nocontent" />;
  }

  return (
    <div
      className={cn(
        "butalert__content",
        popupContent({ alignment }),
        theme?.panelBody
      )}
    >
      {icon ? (
        <div className={cn("butalert__content__icon", theme?.icon)}>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            {icon}
          </motion.span>
        </div>
      ) : null}
      {title ? (
        <Dialog.Title className={cn("butalert__content__title", theme?.title)}>
          {title}
        </Dialog.Title>
      ) : null}
      {description ? (
        <div className={cn("butalert__content__desc", theme?.description)}>
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default PopupBody;
