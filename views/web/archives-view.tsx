import ViewContainer from "../../components/container/view-container";
import BackNavigationContainer from "../../containers/web/navigation/back-navigation";
import useScrollPagination from "../../hooks/useScrollPagination";
import TimelineModuleContainer from "../../containers/web/module/timeline-module";

export default function ArchivesView({ archives }) {
  const [items, ref] = useScrollPagination<any>(archives);

  return (
    <ViewContainer>
      <BackNavigationContainer />
      <div ref={ref}>
        <TimelineModuleContainer className="py-5" items={items} />
      </div>
    </ViewContainer>
  );
}
