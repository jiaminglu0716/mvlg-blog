import { useRouter } from "next/router";
import PrevButtonSM from "../../../components/button/prev-button-sm";

export default function BackNavigationContainer() {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <PrevButtonSM className="m-2" onClick={router.back} />
    </div>
  );
}
