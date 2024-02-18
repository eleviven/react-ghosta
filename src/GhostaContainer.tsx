import type {
  GhostaActions,
  GhostaOptions,
  GhostaContainerProps,
  GhostaPopupID,
} from './types';

import * as React from 'react';

import { GhostaManager } from './GhostaManager';
import { generateRandomInt } from './utils/helpers';

import Popup from './components/Popup/Popup';
import PopupHeader from './components/Popup/PopupHeader';
import PopupBody from './components/Popup/PopupBody';
import PopupFooter from './components/Popup/PopupFooter';

const GhostaContainer: React.FC<GhostaContainerProps> = ({
  classNames,
  colors,
}) => {
  // State
  const [popups, setPopups] = React.useState<GhostaOptions[]>([]);

  // Actions
  const fire = (options: GhostaOptions): GhostaPopupID => {
    const id = generateRandomInt();
    setPopups((prev) =>
      prev.concat({
        ...options,
        id,
      })
    );
    return id;
  };

  const close = (id: GhostaOptions['id']) => {
    if (id) {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    } else {
      setPopups([]);
    }
  };

  // Hooks
  // Ghosta Ref
  const ghosta = React.useRef<GhostaActions>({
    id: generateRandomInt(),
    fire,
    close,
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
    const popupId = popup.id!;

    if (popup.preventClose === undefined) {
      popup.preventClose = index < totalPopupsLength - 1;
    }

    return (
      <Popup
        key={popupId}
        isVisible
        onClose={() => close(popupId)}
        {...popup}
        id={popupId}
        colors={Object.assign({}, colors, popup.colors)}
        classNames={Object.assign({}, classNames, popup.classNames)}
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

export default GhostaContainer;
