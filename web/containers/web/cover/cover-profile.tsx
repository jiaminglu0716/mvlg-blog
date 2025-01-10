import CircleAvatar from "../../../components/avatar/circle-avatar";
import Link from "next/link";
import IconSNSTwitterBlockFillReverse from "../../../components/icons/icon-sns-twi-block-fill-reverse";
import IconChevronDown from "../../../components/icons/icon-chevron-down";
import BounceButtonSM from "../../../components/button/bounce-button-sm";
import { classNames } from "../../../common/utils";
import { Router } from "../../../common";
import { ProfileType, SNSLinkType, SNSType } from "../../../interfaces/api";
import IconSNSInstagramStroke from "../../../components/icons/icon-sns-ins-stroke";
import RadiusContainer from "../../../components/container/radius-container";
import IconSNSTelegramStroke from "../../../components/icons/icon-sns-tg-stroke";
import IconSNSWhatsappStroke from "../../../components/icons/icon-sns-whatsapp-stroke";
import IconSNSFacebookStroke from "../../../components/icons/icon-sns-facebook-stroke";
import IconSNSTwitterStroke from "../../../components/icons/icon-sns-twi-stroke";
import IconSNSGithubStroke from "../../../components/icons/icon-sns-github-stroke";

export function SNSIcon({ type }: { type: SNSType }) {
  switch (type) {
    case "telegram":
      return <IconSNSTelegramStroke size="33px" strokeWidth="2" />;
    case "whatsapp":
      return <IconSNSWhatsappStroke size="33px" strokeWidth="2" />;
    case "instagram":
      return <IconSNSInstagramStroke size="33px" strokeWidth="2" />;
    case "facebook":
      return <IconSNSFacebookStroke size="33px" strokeWidth="2" />;
    case "twitter":
      return <IconSNSTwitterStroke size="33px" strokeWidth="2" />;
    case "github":
      return <IconSNSGithubStroke size="33px" strokeWidth="2" />;
    case "rss":
      return <IconSNSTwitterBlockFillReverse size="33px" strokeWidth="2" />;
    case "other":
      return <IconSNSFacebookStroke size="33px" strokeWidth="2" />;
  }
}

export function CoverProfileModuleContainer({
  profile,
}: {
  profile: ProfileType;
}) {
  const links = profile?.sns.map((sns: SNSLinkType, index: number) => (
    <div
      key={index}
      className="w-12 mx-1 my-1.5 flex items-center justify-center"
    >
      <Link href={sns.link}>
        <SNSIcon type={sns.type} />
      </Link>
    </div>
  ));

  return (
    <div>
      <CircleAvatar
        className="m-auto"
        src={profile?.avatar ?? "./desk.jpg"}
        size={"150px"}
      />

      <h2
        className={classNames("my-5", "font-serif", "text-center", "text-3xl")}
      >
        {profile?.name ?? "Mashiro Shinto"}
      </h2>
      <hr className="my-4" />
      <div className="m-auto flex flex-wrap justify-center w-[80%]">
        {links}
      </div>
    </div>
  );
}

export default function CoverProfileContainer({
  profile,
}: {
  profile: ProfileType;
}) {
  return (
    <div className="fixed z-10 w-full h-full flex justify-center items-center">
      <RadiusContainer className="sm:max-w-xl sm:max-h-2xl p-14 flex-1 justify-center items-center text-black">
        <CoverProfileModuleContainer profile={profile} />

        <Link href={Router.home()}>
          <BounceButtonSM className="mt-10">
            <IconChevronDown size="40px" />
          </BounceButtonSM>
        </Link>
      </RadiusContainer>
    </div>
  );
}
