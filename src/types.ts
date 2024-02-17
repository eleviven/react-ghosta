import type {
  ButtonSize,
  ButtonVariant,
} from './components/Button/button.type';
import type {
  GhostaPopupClassNames,
  GhostaPopupElementColors,
  GhostaPopupProps,
  GhostaPopupAlignment,
} from './components/Popup/popup.type';

export type GhostaPopupID = number;

export type GhostaActions = {
  id: number;
  fire: (options: GhostaOptions) => GhostaPopupID;
  close: (id?: GhostaPopupID) => void;
};

export type GhostaContainerProps = {
  classNames?: Partial<GhostaPopupClassNames>;
  colors?: Partial<GhostaPopupElementColors>;
};

export type GhostaOptions = Partial<{
  id: GhostaPopupID;

  title: string;
  description: string;

  icon: React.ReactNode;

  headerTitle: string;
  headerDescription: string;

  content: React.ReactNode;

  buttons: GhostaButtonOptions[] | null;

  alignment: GhostaPopupAlignment;
  showCloseButton: boolean;
  preventClose: boolean;

  size: GhostaPopupProps['size'];
  colors: Partial<GhostaPopupElementColors>;
  classNames: Partial<GhostaPopupClassNames>;
}>;

export type GhostaButtonOptions = {
  title?: string;
  preventClose?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFilled?: boolean;
  onClick?: (params: GhostaPopupContext) => void | Promise<void>;
};

export type GhostaPopupContext = {
  popupId: number;
  onClose: () => void;
};
