import type { GhostaPopupProps } from './popup.type';

import React, { createContext, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { XMarkIcon } from '../icons';
import { popup } from './popup.variant';
import { cn, generateCssVariables } from '../../utils/helpers';

export const PopupContext = createContext<GhostaPopupProps>(
  {} as GhostaPopupProps
);

let closeTimeout: NodeJS.Timeout;

const Popup: React.FC<GhostaPopupProps> = ({
  id,
  isVisible,
  alignment,
  size,
  children,
  showCloseButton,
  colors,
  classNames,
  // animationOptions, // Work inprogress
  showBackdrop = true,
  preventClose,
  onClose,
}) => {
  const [showPopup, setShowPopup] = useState(isVisible);

  const handleClose = () => {
    if (preventClose) return;
    setShowPopup(false);
    closeTimeout = setTimeout(onClose, 250);
  };

  useEffect(() => {
    setShowPopup(isVisible);
  }, [isVisible]);

  useEffect(() => {
    return () => clearTimeout(closeTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <PopupContext.Provider
      value={{
        id,
        isVisible,
        alignment,
        size,
        children,
        colors,
        classNames,
        onClose: handleClose,
      }}
    >
      {/* Popup Transition Wrapper */}
      <Transition
        as={Dialog}
        show={showPopup}
        onClose={handleClose}
        className={cn('ghosta ghosta--root', popup({ size, alignment }))}
        style={generateCssVariables(colors)}
        appear
        unmount
      >
        {/* Popup */}
        {/* Backdrop */}
        {showBackdrop && (
          <Transition.Child
            as="div"
            className={cn('ghosta__backdrop', classNames?.backdrop)}
            aria-hidden="true"
            enter="ghosta__backdrop--enter"
            enterFrom="ghosta__backdrop--enterFrom"
            enterTo="ghosta__backdrop--enterTo"
            leave="ghosta__backdrop--leave"
            leaveFrom="ghosta__backdrop--leaveFrom"
            leaveTo="ghosta__backdrop--leaveTo"
          />
        )}

        {/* Panel */}
        <div className="ghosta__scroll-container">
          <Transition.Child
            as={Dialog.Panel}
            className={cn(
              'ghosta__panel',
              classNames?.panel,
              showPopup ? 'ghosta__panel--entered' : 'ghosta__panel--leaved'
            )}
            enter="ghosta__panel--enter"
            enterFrom="ghosta__panel--enterFrom"
            enterTo="ghosta__panel--enterTo"
            leave="ghosta__panel--leave"
            leaveFrom="ghosta__panel--leaveFrom"
            leaveTo="ghosta__panel--leaveTo"
          >
            {/* Close Button */}
            {showCloseButton ? (
              <button
                className={cn('ghosta__close-button', classNames?.closeButton)}
                aria-label="Close"
                onClick={handleClose}
              >
                <XMarkIcon />
              </button>
            ) : null}

            {/* Entire Content */}
            {children}
          </Transition.Child>
        </div>
      </Transition>
    </PopupContext.Provider>
  );
};

export default Popup;
