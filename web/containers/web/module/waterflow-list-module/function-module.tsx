import FunctionBlock from "./function-block";
import RadiusContainer from "../../../../components/container/radius-container";
import { HomeService } from "../../../../interfaces/service";

export default function FunctionModule({
  module,
  className,
}: {
  module: HomeService;
  className?: string;
}) {
  return (
    <div className={className}>
      <RadiusContainer className="mb-5 w-fit py-2 px-5">
        <h2 className="text-left text-slate-900 text-2xl">{module.title}</h2>
      </RadiusContainer>
      <div className="w-full sm:columns-2 lg:columns-3 sm:gap-8">
        {module.modules.map((item, itemIdx: number) => {
          return <FunctionBlock key={itemIdx} item={item} />;
        })}
      </div>
    </div>
  );
}
