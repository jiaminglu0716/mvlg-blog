import ButtonCenter from "../../../../components/button/button-center";
import RadiusContainer from "../../../../components/container/radius-container";
import LinkListBlock from "./link-list-block";

export default function LinkListModule({ category }) {
  return (
    <RadiusContainer className="px-4 py-5 mt-3 mb-8 sm:w-[90%] m-auto">
      <div>
        <ButtonCenter className="h-12">
          <span className={"font-bold text-2xl font-serif"}>
            {category.category}
          </span>
        </ButtonCenter>
      </div>
      <div className="sm:columns-2 lg:columns-3 sm:gap-8 sm:mt-4">
        {category.list.map((link, index: number) => {
          return <LinkListBlock key={index} link={link} />;
        })}
      </div>
    </RadiusContainer>
  );
}
