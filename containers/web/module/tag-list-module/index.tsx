import ButtonCenter from "../../../../components/button/button-center";
import { QListTag } from "../../../../services/post/query/QListTag";
import TagListItem from "./tag-list-item";

export default function TagListContainer({ tags }: { tags: QListTag[] }) {
  return (
    <div className="px-4 py-5 mt-3 mb-8 sm:w-[90%] m-auto">
      <div>
        <ButtonCenter className="h-12">
          <span className={"font-bold text-2xl font-serif"}>Tags</span>
        </ButtonCenter>
      </div>
      <div className="flex flex-wrap mt-3">
        {tags.length ? (
          tags.map((tag, index: number) => {
            return <TagListItem key={index} tag={tag} />;
          })
        ) : (
          <p className="m-auto p-5">No tags yet :/</p>
        )}
      </div>
    </div>
  );
}
