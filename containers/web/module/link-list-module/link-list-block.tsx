import ButtonSM from "../../../../components/button/button-sm";
import RadiusContainer from "../../../../components/common/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";

export default function LinkListBlock({ link }: { link: any }) {
  return (
    <div className="inline-flex w-full p-2 mt-2">
      <div>
        <ButtonSM>
          <IconCircle size="25" />
        </ButtonSM>
      </div>
      <RadiusContainer className="ml-3 px-2 py-3 text-sm font-serif font-medium">
        {link.title}
      </RadiusContainer>
    </div>
  );
}
