import type {
  ButtonSize,
  ButtonVariant,
} from "./components/Button/button.type";
import type {
  ButalertPopupClassNames,
  ButalertPopupElementColors,
  ButalertPopupProps,
  ButalertPopupAlignment,
} from "./components/Popup/popup.type";

export type ButalertProps = {
  classNames?: Partial<ButalertPopupClassNames>;
  colors?: Partial<ButalertPopupElementColors>;
  animationOptions?: Partial<ButalertAnimationOptions>;
};

export type ButalertActions = {
  id: number;
  fire: (options: ButalertOptions) => void;
  close: (id: number) => void;
  closeAll: () => void;
};

export type ButalertOptions = {
  id: number;

  title?: string;
  description?: string;

  headerTitle?: string;
  headerDescription?: string;

  icon?: React.ReactNode;

  buttons?: ButalertButtonOptions[] | null;

  alignment?: ButalertPopupAlignment;
  showCloseButton?: boolean;
  size?: ButalertPopupProps["size"];
  colors?: Partial<ButalertPopupElementColors>;
  classNames?: Partial<ButalertPopupClassNames>;
};

export type ButalertButtonOptions = {
  title?: string;
  preventClose?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFilled?: boolean;
  onClick?: ({ butalert }: ButalertButtonActionParams) => void;
};

export type ButalertButtonActionParams = {
  butalert: ButalertActions;
};

export type ButalertAnimationOptions = Record<
  "open" | "close",
  {
    delay?: number;
    elapsed?: number;
    type?: "decay" | "spring" | "keyframes" | "tween" | "inertia";
    duration?: number;
  }
>;
