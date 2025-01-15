import CoverProfileContainer from "../../containers/web/cover/cover-profile";
import { ProfileType } from "../../interfaces/api";
import { profileHandler } from "../../middlewares";

export default function CoverView({ profile }: { profile: ProfileType }) {
  profileHandler(profile);
  return (
    <>
      <CoverProfileContainer profile={profile} />
    </>
  );
}
