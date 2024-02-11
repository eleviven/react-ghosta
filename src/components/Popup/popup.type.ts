import type { VariantProps } from "class-variance-authority";
import type { GhostaAnimationOptions, GhostaButtonOptions } from "../../types";
import { popup } from "./popup.variant";

export type GhostaPopupProps = VariantProps<typeof popup> & {
  id: number;
  children: React.ReactNode;
  isVisible: boolean;
  showCloseButton?: boolean;
  classNames?: Partial<GhostaPopupClassNames> | null;
  colors?: Partial<GhostaPopupElementColors> | null;
  animationOptions?: Partial<GhostaAnimationOptions>;
  showBackdrop?: boolean;
  preventClose?: boolean;
  onClose: () => void;
};

export type GhostaPopupBodyProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  content?: React.ReactNode;
};

export type GhostaPopupHeaderProps = {
  title?: string;
  description?: string;
};

export type GhostaPopupFooterProps = {
  buttons?: GhostaButtonOptions[] | null;
};

export type GhostaPopupAlignment = "left" | "center" | "right";

export type GhostaPopupElementColors = {
  textIcon: string;
  bgIcon: string;
  textTitle: string;
  textDescription: string;
  bgPanel: string;
  bgBackdrop: string;
  textCloseButton: string;
  bgCloseButton: string;
};

export type GhostaPopupClassNames = {
  panel: string;
  panelHeader: string;
  panelBody: string;
  panelFooter: string;

  backdrop: string;

  icon: string;
  title: string;
  description: string;

  closeButton: string;

  button: Partial<{
    // Base Style of Button
    base: string;

    // Variants
    variants: Partial<{
      default: string;
      primary: string;
      success: string;
      danger: string;
    }>;

    // Sizes
    sizes: Partial<{
      sm: string;
      md: string;
      lg: string;
    }>;
  }>;
};
