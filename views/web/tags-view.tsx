import ViewContainer from "../../components/container/view-container";
import BackNavigationContainer from "../../containers/web/navigation/back-navigation";
import TagListContainer from "../../containers/web/module/tag-list-module";

export default function TagsView({ tags }) {
  return (
    <ViewContainer>
      <BackNavigationContainer />

      <TagListContainer tags={tags} />
    </ViewContainer>
  );
}
