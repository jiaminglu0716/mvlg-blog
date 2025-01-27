import ButtonCenter from "../../../../components/button/button-center";
import useLocaleService from "../../../../hooks/useLocaleService";
import { TagType } from "../../../../interfaces/api";
import TagListItem from "./tag-list-item";

export default function TagListContainer({ tags }: { tags: TagType[] }) {
  const { tagspage } = useLocaleService();

  return (
    <div className="px-4 py-5 mt-3 mb-8 sm:w-[90%] m-auto">
      <div>
        <ButtonCenter className="h-12">
          <span className={"font-bold text-2xl font-serif"}>
            {tagspage.title}
          </span>
        </ButtonCenter>
      </div>
      <div className="flex flex-wrap mt-3 justify-center">
        {tags.length ? (
          tags.map((tag, index: number) => {
            return <TagListItem key={index} tag={tag} />;
          })
        ) : (
          <p className="m-auto p-5">{tagspage.noTagsText}</p>
        )}
      </div>
    </div>
  );
}
