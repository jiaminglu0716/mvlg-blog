import Image from "next/image";
import RadiusContainer from "../../common/radius-container";

export default function ProfileRadiusBlock() {
  return (
    <RadiusContainer>
      <Image src="/desk.jpg" alt="desk"></Image>
    </RadiusContainer>
  );
}
