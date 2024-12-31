import CircleAvatar from "../../../components/avatar/circle-avatar";
import Link from "next/link";
import IconSNSTwitterBlockFillReverse from "../../../components/icons/icon-sns-twi-block-fill-reverse";
import IconChevronDown from "../../../components/icons/icon-chevron-down";
import BounceButtonSM from "../../../components/button/bounce-button-sm";
import { classNames } from "../../../lib/utils";
import { Router } from "../../../config/router-config";

export function CoverProfileModuleContainer() {
  const links = [];

  for (let i = 0; i < 8; i++) {
    links.push(
      <div key={i}>
        <Link className="w-10" href={"/"}>
          <IconSNSTwitterBlockFillReverse fill={"#F2F2F2"} size="40px" />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <CircleAvatar className="m-auto" src="/desk.jpg" size={"150px"} />

      <h2
        className={classNames(
          "my-5",
          "font-serif",
          "text-center",
          "font-bold",
          "text-2xl"
        )}
      >
        Mashiro Shinto
      </h2>

      <div className="m-auto flex flex-wrap justify-center w-40">{links}</div>
    </div>
  );
}

export default function CoverProfileContainer() {
  return (
    <div className="fixed z-10 w-full h-full flex justify-center items-center text-white">
      <div>
        <CoverProfileModuleContainer />
        <BounceButtonSM className="mt-10">
          <Link href={Router.home()}>
            <IconChevronDown fill={"#F2F2F2"} size="40px" />
          </Link>
        </BounceButtonSM>
      </div>
    </div>
  );
}
