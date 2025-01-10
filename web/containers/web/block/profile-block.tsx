import Link from "next/link";
import CircleAvatar from "../../../components/avatar/circle-avatar";
import RadiusContainer from "../../../components/container/radius-container";
import IconSNSTwitterBlockFillReverse from "../../../components/icons/icon-sns-twi-block-fill-reverse";
import { ProfileType, SNSLinkType } from "../../../interfaces/api";
import { link } from "../../../common/link";

function ProfilePostStatContainer({
  profile,
  stat,
}: {
  profile: ProfileType;
  stat: any;
}) {
  const items = Object.keys(stat).map((title: string, index: number) => {
    const count = stat[title] > 999 ? "999+" : stat[title];
    return (
      <div key={index} className="text-center w-12">
        <div className="text-sm text-slate-900">{count}</div>
        <div className="text-xs text-slate-800">{title}</div>
      </div>
    );
  });

  return (
    <div className="flex">
      <div className="m-3">
        <CircleAvatar size="80px" src={profile?.avatar ?? link("/desk.jpg")} />
      </div>
      <div className="flex-1 my-3 mr-3">
        <div className="font-bold text-xl my-1 text-left mx-2">
          {profile?.name ?? ""}
        </div>
        <div className="flex justify-center">{items}</div>
      </div>
    </div>
  );
}

export default function ProfileBlockContainer({
  profile,
  stat,
}: {
  profile: ProfileType;
  stat: any;
}) {
  const links = profile?.sns.map((sns: SNSLinkType, index: number) => {
    return (
      <div key={index} className="py-1 px-1.5 w-1/4">
        <Link href={"/"}>
          <IconSNSTwitterBlockFillReverse className="m-auto" size="40px" />
        </Link>
      </div>
    );
  });

  return (
    <RadiusContainer className="flex justify-center py-2">
      <div className="w-64 mx-2">
        <ProfilePostStatContainer profile={profile} stat={stat} />
        {/* <hr className="w-[90%] m-auto" />
        <div className="my-1.5 mx-5 m-auto flex flex-wrap justify-left">
          {links}
        </div> */}
      </div>
    </RadiusContainer>
  );
}
