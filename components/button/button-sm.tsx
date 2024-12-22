import React from "react";
import { classNames, classNameToArray } from "../../lib/utils";
import ButtonCenter from "./button-center";
import { ClickEvent } from "../common/types";

type ButtonSMProps = {
  children: React.ReactNode;
  className?: string;
  style?: { [key: string]: any };
  onClick?: ClickEvent;
};

export default function ButtonSM({
  children,
  className,
  style,
  onClick,
}: ButtonSMProps) {
  return (
    <ButtonCenter
      className={classNames(
        "w-10",
        "h-10",
        "text-sm",
        ...classNameToArray(className)
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </ButtonCenter>
  );
}
