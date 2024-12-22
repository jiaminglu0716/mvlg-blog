import React from "react";
import ButtonSM from "./button-sm";
import { ClickEvent } from "../common/types";
import IconChevronLeft from "../icons/icon-chevron-left";

type PrevButtonSMProps = {
  onClick: ClickEvent;
  className?: string;
  style?: { [key: string]: any };
};

export default function PrevButtonSM({
  onClick,
  style,
  className,
}: PrevButtonSMProps) {
  return (
    <ButtonSM className={className} style={style} onClick={onClick}>
      <IconChevronLeft size="24" />
    </ButtonSM>
  );
}
