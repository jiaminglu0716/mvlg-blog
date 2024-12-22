import React from "react";
import ButtonSM from "./button-sm";
import { ClickEvent } from "../common/types";
import IconChevronRight from "../icons/icon-chevron-right";

type NextButtonSMProps = {
  onClick: ClickEvent;
  className?: string;
  style?: { [key: string]: any };
};

export default function NextButtonSM({
  onClick,
  style,
  className,
}: NextButtonSMProps) {
  return (
    <ButtonSM className={className} style={style} onClick={onClick}>
      <IconChevronRight size="24" />
    </ButtonSM>
  );
}
