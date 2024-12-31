import React from "react";
import ButtonSM from "./button-sm";
import IconChevronLeft from "../icons/icon-chevron-left";
import { DivProps } from "../common/props";

export default function PrevButtonSM(props: DivProps) {
  return (
    <ButtonSM {...props}>
      <IconChevronLeft size="24" />
    </ButtonSM>
  );
}
