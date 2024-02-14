import type { GhostaActions, GhostaOptions, GhostaProps } from './types';

import * as React from 'react';

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
  const [popups, setPopups] = React.useState<GhostaOptions[]>([]);

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
  // Ghosta Ref
  const ghosta = React.useRef<GhostaActions>({
    id: generateRandomInt(),
    fire,
    close,
    closeAll,
  });

  // Register Ghosta
  React.useEffect(() => {
    if (!ghosta.current) return;
    const ghostaId = ghosta.current.id;

    GhostaManager.register(ghosta.current);
    return () => {
      GhostaManager.unregister(ghostaId);
    };
  }, []);

  if (!popups.length) return null;

  const totalPopupsLength = popups.length;

  return popups.map((popup, index) => {
    if (popup.preventClose === undefined) {
      popup.preventClose = index < totalPopupsLength - 1;
    }

    return (
      <Popup
        key={popup.id}
        isVisible
        onClose={() => close(popup.id!)}
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
          content={popup.content}
        />

        <PopupFooter buttons={popup.buttons} />
      </Popup>
    );
  });
};

export default Ghosta;
