import { ContainerProps } from "../../../../components/common/props";
import { HomeService } from "../../../../interfaces/service";
import FunctionModule from "./function-module";

type WaterflowListModuleProps = ContainerProps & {
  modules: HomeService[];
};

export default function WaterflowListModuleContainer(
  props: WaterflowListModuleProps
) {
  const { modules, ...subprops } = props;

  return (
    <div {...subprops}>
      {modules.map((module, modIdx: number) => {
        return <FunctionModule className="mb-5" key={modIdx} module={module} />;
      })}
    </div>
  );
}
