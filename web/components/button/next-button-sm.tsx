import React from "react";
import ButtonSM from "./button-sm";
import IconChevronRight from "../icons/icon-chevron-right";
import { DivProps } from "../common/props";

export default function NextButtonSM(props: DivProps) {
  return (
    <ButtonSM {...props}>
      <IconChevronRight size="24" />
    </ButtonSM>
  );
}
