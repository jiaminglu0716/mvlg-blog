import React from "react";
import ButtonSM from "./button-sm";
import IconCircle from "../icons/icon-circle";
import { DivProps } from "../common/props";

export default function TopButtonSM(props: DivProps) {
  return (
    <ButtonSM {...props}>
      <IconCircle size="24" />
    </ButtonSM>
  );
}
