import NextButtonSM from "../../../components/button/next-button-sm";
import PrevButtonSM from "../../../components/button/prev-button-sm";

export default function PrevNextNavigation({
  prev = () => {},
  next = () => {},
}: {
  prev?: () => void;
  next?: () => void;
}) {
  return (
    <div className="flex justify-between">
      <PrevButtonSM className="m-4" onClick={prev} />
      <NextButtonSM className="m-4" onClick={next} />
    </div>
  );
}
