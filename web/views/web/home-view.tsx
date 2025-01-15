import ViewContainer from "../../components/container/view-container";
import WaterflowListModuleContainer from "../../containers/web/module/waterflow-list-module";
import { HomePageData } from "../../interfaces/service";

type HomeViewProps = { pagedata: HomePageData };

export default function HomeView(props: HomeViewProps) {
  const { pagedata } = props;

  return (
    <ViewContainer className="flex-1 justify-center font-serif">
      <WaterflowListModuleContainer modules={pagedata.data} />
    </ViewContainer>
  );
}
