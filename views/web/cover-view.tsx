import CoverBackgroundContainer from "../../containers/web/cover/cover-mask";
import CoverProfileContainer from "../../containers/web/cover/cover-profile";

export default function CoverView() {
  return (
    <>
      <CoverProfileContainer />
      <CoverBackgroundContainer />
    </>
  );
}
