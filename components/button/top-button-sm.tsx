import React from "react";
import ButtonSM from "./button-sm";
import { ClickEvent } from "../common/types";
import IconCircle from "../icons/icon-circle";

type TopButtonSMProps = {
  onClick: ClickEvent;
  className?: string;
  style?: { [key: string]: any };
};

export default function TopButtonSM({
  onClick,
  style,
  className,
}: TopButtonSMProps) {
  return (
    <ButtonSM className={className} style={style} onClick={onClick}>
      <IconCircle size="24" />
    </ButtonSM>
  );
}
