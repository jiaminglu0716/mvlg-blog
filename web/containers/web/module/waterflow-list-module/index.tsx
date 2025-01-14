import { ContainerProps } from "../../../../components/common/props";
import FunctionModule from "./function-module";

type WaterflowListModuleProps = ContainerProps & {
  modules: any[];
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
