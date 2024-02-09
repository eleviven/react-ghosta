import { VariantProps } from "class-variance-authority";
import { ButalertButtonOptions } from "../../butalert.types";
import { popup } from "./popup.variant";

export type ButalertPopupProps = VariantProps<typeof popup> & {
  id: number;
  children: React.ReactNode;
  isVisible: boolean;
  showCloseButton?: boolean;
  classNames?: Partial<ButalertPopupClassNames> | null;
  colors?: Partial<ButalertPopupElementColors> | null;
  onClose: () => void;
};

export type ButalertPopupBodyProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
};

export type ButalertPopupHeaderProps = {
  title?: string;
  description?: string;
};

export type ButalertPopupFooterProps = {
  buttons?: ButalertButtonOptions[] | null;
};

export type ButalertPopupAlignment = "left" | "center" | "right";

export type ButalertPopupElementColors = {
  textIcon: string;
  bgIcon: string;
  textTitle: string;
  textDescription: string;
  bgPanel: string;
  bgBackdrop: string;
  textCloseButton: string;
  bgCloseButton: string;
};

export type ButalertPopupClassNames = {
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
