import type { GhostaPopupBodyProps } from "./popup.type";

import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

import { PopupContext } from "./Popup";
import { popupContent } from "./popup.variant";
import { cn } from "../../utils/helpers";

const PopupBody: React.FC<GhostaPopupBodyProps> = ({
  title,
  description,
  icon,
  content,
}) => {
  const { alignment, classNames } = useContext(PopupContext);

  if (!title && !description && !icon && !content) {
    return <div className="ghosta__nocontent" />;
  }

  return (
    <div
      className={cn(
        "ghosta__content",
        popupContent({ alignment }),
        classNames?.panelBody
      )}
    >
      {icon ? (
        <div className={cn("ghosta__content__icon", classNames?.icon)}>
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
        <Dialog.Title
          className={cn("ghosta__content__title", classNames?.title)}
        >
          {title}
        </Dialog.Title>
      ) : null}
      {description ? (
        <div className={cn("ghosta__content__desc", classNames?.description)}>
          {description}
        </div>
      ) : null}
      {content ? (
        <div className="ghosta__content__content">{content}</div>
      ) : null}
    </div>
  );
};

export default PopupBody;
