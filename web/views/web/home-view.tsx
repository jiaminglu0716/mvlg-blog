import ViewContainer from "../../components/container/view-container";
import WaterflowListModuleContainer from "../../containers/web/module/waterflow-list-module";

type HomeViewProps = { data: any };

export default function HomeView(props: HomeViewProps) {
  const { data } = props;

  return (
    <ViewContainer className="flex-1 justify-center font-serif">
      <WaterflowListModuleContainer modules={data.modules} />
    </ViewContainer>
  );
}
