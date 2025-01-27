import { SVGProps } from "./image/svg";

/**
 * Base Props
 */
export type Direction = "top" | "bottom" | "left" | "right";

/**
 * Icon-Props
 */
export type IconProps = Omit<SVGProps, "children">;

/**
 * Default Attributes Props
 */
export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type ContainerProps = Omit<DivProps, "children">;

export type ViewProps = ContainerProps;

export type ClickEvent = (event: React.MouseEvent) => void;

export type BlockValueType<T> = {
  text: string;
  value: T;
  onClick: ClickEvent;
};
