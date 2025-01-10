import NextButtonSM from "../../../components/button/next-button-sm";
import PrevButtonSM from "../../../components/button/prev-button-sm";
import { DivProps } from "../../../components/common/props";
import { classNames } from "../../../common/utils";

export default function PrevNextNavigation({
  prev = () => {},
  next = () => {},
  className,
}: {
  prev?: () => void;
  next?: () => void;
} & DivProps) {
  return (
    <div className={classNames("flex justify-between", className)}>
      <PrevButtonSM className="m-4" onClick={prev} />
      <NextButtonSM className="m-4" onClick={next} />
    </div>
  );
}
