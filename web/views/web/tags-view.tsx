import ViewContainer from "../../components/container/view-container";
import BackNavigationContainer from "../../containers/web/navigation/back-navigation";
import TagListContainer from "../../containers/web/module/tag-list-module";
import { TagType } from "../../interfaces/api";

export default function TagsView({ tags }: { tags: TagType[] }) {
  return (
    <ViewContainer>
      <BackNavigationContainer />

      <TagListContainer tags={tags} />
    </ViewContainer>
  );
}
