import type { GhostaPopupProps } from './popup.type';

import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { cx } from 'class-variance-authority';

import { XMarkIcon } from '../icons';
import { popup } from './popup.variant';
import { generateCssVariables } from '../../utils/helpers';

export const PopupContext = React.createContext<GhostaPopupProps>(
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
  showBackdrop = true,
  preventClose,
  onClose,
}) => {
  const [showPopup, setShowPopup] = React.useState(isVisible);

  const handleClose = () => {
    if (preventClose) return;
    setShowPopup(false);
    closeTimeout = setTimeout(onClose, 250);
  };

  React.useEffect(() => {
    setShowPopup(isVisible);
  }, [isVisible]);

  React.useEffect(() => {
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
        className={cx('ghosta ghosta--root', popup({ size, alignment }))}
        style={generateCssVariables(colors)}
        appear
        unmount
      >
        {/* Popup */}
        {/* Backdrop */}
        {showBackdrop && (
          <Transition.Child
            as="div"
            className={cx('ghosta__backdrop', classNames?.backdrop)}
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
            className={cx(
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
                className={cx('ghosta__close-button', classNames?.closeButton)}
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
