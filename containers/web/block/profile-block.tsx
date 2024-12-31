import Link from "next/link";
import CircleAvatar from "../../../components/avatar/circle-avatar";
import RadiusContainer from "../../../components/container/radius-container";
import IconSNSTwitterBlockFillReverse from "../../../components/icons/icon-sns-twi-block-fill-reverse";
import { QPostStats } from "../../../services/post/query/QPostStat";

function ProfilePostStatContainer({ stat }: { stat: QPostStats }) {
  const items = Object.keys(stat).map((title: string, index: number) => {
    const count = stat[title] > 999 ? "999+" : stat[title];
    return (
      <div key={index} className="text-center w-12">
        <div className="text-sm text-slate-700">{count}</div>
        <div className="text-xs text-slate-500">{title}</div>
      </div>
    );
  });

  return (
    <div className="flex">
      <div className="m-3">
        <CircleAvatar size="80px" src="/desk.jpg" />
      </div>
      <div className="flex-1 my-3 mr-3">
        <div className="font-bold text-lg my-1">Mashiro Shinto</div>
        <div className="flex justify-center">{items}</div>
      </div>
    </div>
  );
}

export default function ProfileBlockContainer({ stat }: { stat: QPostStats }) {
  const links = [];

  for (let i = 0; i < 8; i++) {
    links.push(
      <div key={i} className="py-1 px-1.5">
        <Link href={"/"}>
          <IconSNSTwitterBlockFillReverse size="40px" />
        </Link>
      </div>
    );
  }

  return (
    <RadiusContainer className="flex justify-center py-2">
      <div className="w-64 mx-2">
        <ProfilePostStatContainer stat={stat} />
        <hr className="w-[90%] m-auto" />
        <div className="my-1.5 m-auto flex flex-wrap justify-center">
          {links}
        </div>
      </div>
    </RadiusContainer>
  );
}
