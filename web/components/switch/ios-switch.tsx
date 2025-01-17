import { Dispatch, SetStateAction, useState } from "react";
import { classNames } from "../../common";
import { DivProps } from "../common/props";

export default function IOSSwitch(
  props: DivProps & {
    value?: boolean;
    state?: [boolean, Dispatch<SetStateAction<boolean>>];
    onSwitch?: (state: boolean, e: React.MouseEvent) => void;
  }
) {
  const { className, value, state, onSwitch, ...subprops } = props;
  const nstate = state ? state : useState<boolean>(value);

  const [SWState, setSWState] = nstate;

  return (
    <div
      className={classNames(
        "rounded-full border w-10 h-6 px-[1px] flex items-center",
        SWState ? "bg-green-400 border-green-400" : "border current",
        className
      )}
      onClick={(event) => {
        const newState = !SWState;
        setSWState(newState);
        if (onSwitch) onSwitch(newState, event);
      }}
      {...subprops}
    >
      <div
        className={classNames(
          "rounded-full w-5 h-5",
          "transition transform motion-reduce:transition-none",
          SWState ? "translate-x-4 bg-white" : "bg-white"
        )}
        onClick={(event) => event.preventDefault()}
      ></div>
    </div>
  );
}
