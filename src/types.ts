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

export type GhostaProps = {
  classNames?: Partial<GhostaPopupClassNames>;
  colors?: Partial<GhostaPopupElementColors>;
  animationOptions?: Partial<GhostaAnimationOptions>;
};

export type GhostaActions = {
  id: number;
  fire: (options: GhostaOptions) => void;
  close: (id: number) => void;
  closeAll: () => void;
};

export type GhostaOptions = Partial<{
  id: number;
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
  onClick?: (params: GhostaButtonActionParams) => void | Promise<void>;
};

export type GhostaButtonActionParams = {
  popupId: number;
  onClose: () => void;
};

export type GhostaAnimationOptions = Record<
  'open' | 'close',
  {
    delay?: number;
    elapsed?: number;
    type?: 'decay' | 'spring' | 'keyframes' | 'tween' | 'inertia';
    duration?: number;
  }
>;
