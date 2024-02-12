import type { GhostaActions, GhostaOptions, GhostaProps } from './types';

import React, { useEffect, useRef, useState } from 'react';

import { GhostaManager } from './GhostaManager';
import { generateRandomInt } from './utils/helpers';

import Popup from './components/Popup/Popup';
import PopupHeader from './components/Popup/PopupHeader';
import PopupBody from './components/Popup/PopupBody';
import PopupFooter from './components/Popup/PopupFooter';

const Ghosta: React.FC<GhostaProps> = ({
  classNames,
  colors,
  animationOptions,
}) => {
  // State
  const [popups, setPopups] = useState<GhostaOptions[]>([]);

  // Actions
  const fire = (options: GhostaOptions) => {
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
  const butalert = useRef<GhostaActions>({
    id: generateRandomInt(),
    fire,
    close,
    closeAll,
  });

  // Register Butalert
  useEffect(() => {
    if (!butalert.current) return;
    const butalertId = butalert.current.id;

    GhostaManager.register(butalert.current);
    return () => {
      GhostaManager.unregister(butalertId);
    };
  }, []);

  if (!popups.length) return null;

  const totalPopupsLength = popups.length;

  return popups.map((popup, index) => {
    return (
      <Popup
        key={popup.id}
        isVisible
        onClose={() => close(popup.id!)}
        {...popup}
        colors={Object.assign({}, colors, popup.colors)}
        classNames={Object.assign({}, classNames, popup.classNames)}
        animationOptions={animationOptions}
        preventClose={index < totalPopupsLength - 1}
      >
        <PopupHeader
          title={popup.headerTitle}
          description={popup.headerDescription}
        />

        <PopupBody
          title={popup.title}
          description={popup.description}
          icon={popup.icon}
          content={popup.content}
        />

        <PopupFooter buttons={popup.buttons} />
      </Popup>
    );
  });
};

export default Ghosta;
