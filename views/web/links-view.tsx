import useScrollPagination from "../../hooks/useScrollPagination";
import BackNavigationContainer from "../../containers/web/navigation/back-navigation";
import ViewContainer from "../../components/container/view-container";
import LinkListContainer from "../../containers/web/module/link-list-module";

export default function LinksView({ links }) {
  const [items, ref] = useScrollPagination<any>(links);

  return (
    <ViewContainer>
      <BackNavigationContainer />

      <div ref={ref}>
        <LinkListContainer categorys={items} />
      </div>
    </ViewContainer>
  );
}
