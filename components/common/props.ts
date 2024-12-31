import { SVGProps } from "./image/svg";

/**
 * Icon-Props
 */
export type IconProps = Omit<SVGProps, "children">;

/**
 * Default Attributes Props
 */
export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type ClickEvent = (event: React.MouseEvent) => void;

export type BlockValueType<T> = {
  text: string;
  value: T;
  onClick: ClickEvent;
};
