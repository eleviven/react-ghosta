import type {
  ButalertActions,
  ButalertOptions,
  ButalertProps,
} from "./butalert.types";

import React, { useEffect, useRef, useState } from "react";

import { ButalertManager } from "./ButalertManager";
import { generateRandomInt } from "./utils/helpers";

import Popup from "./components/Popup/Popup";
import PopupHeader from "./components/Popup/PopupHeader";
import PopupBody from "./components/Popup/PopupBody";
import PopupFooter from "./components/Popup/PopupFooter";

const Butalert: React.FC<ButalertProps> = ({
  classNames,
  colors,
  animationOptions,
}) => {
  // State
  const [popups, setPopups] = useState<ButalertOptions[]>([]);

  // Actions
  const fire = (options: ButalertOptions) => {
    setPopups((prev) =>
      prev.concat({
        ...options,
        id: generateRandomInt(),
      })
    );
  };

  const close = (id: number) => {
    setPopups((prev) => prev.filter((popup) => popup.id !== id));
  };

  const closeAll = () => {
    setPopups([]);
  };

  // Hooks
  // Butalert Ref
  const butalert = useRef<ButalertActions>({
    id: generateRandomInt(),
    fire,
    close,
    closeAll,
  });

  // Register Butalert
  useEffect(() => {
    if (!butalert.current) return;
    const butalertId = butalert.current.id;

    ButalertManager.register(butalert.current);
    return () => {
      ButalertManager.unregister(butalertId);
    };
  }, []);

  if (!popups.length) return null;

  return popups.map((popup) => (
    <Popup
      key={popup.id}
      isVisible
      onClose={() => close(popup.id)}
      {...popup}
      colors={Object.assign({}, colors, popup.colors)}
      classNames={Object.assign({}, classNames, popup.classNames)}
      animationOptions={animationOptions}
    >
      <PopupHeader
        title={popup.headerTitle}
        description={popup.headerDescription}
      />

      <PopupBody
        title={popup.title}
        description={popup.description}
        icon={popup.icon}
      />

      <PopupFooter buttons={popup.buttons} />
    </Popup>
  ));
};

export default Butalert;
