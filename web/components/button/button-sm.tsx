import React from "react";
import { classNames } from "../../common/utils";
import ButtonCenter from "./button-center";
import { DivProps } from "../common/props";

export default function ButtonSM(props: DivProps) {
  const { className, children, ...subprops } = props;
  return (
    <ButtonCenter
      className={classNames("w-10", "h-10", "text-sm", className)}
      {...subprops}
    >
      {children}
    </ButtonCenter>
  );
}
