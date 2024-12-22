import ButtonCenter from "../../../../components/button/button-center";
import RadiusContainer from "../../../../components/common/radius-container";
import TimelineBlock from "./timeline-block";
import { classNames } from "../../../../lib/utils";

export default function TimelineModule({
  archive,
  className,
}: {
  archive: any;
  className?: string;
}) {
  return (
    <RadiusContainer
      className={classNames("px-4 py-5", "sm:w-[90%]", "m-auto", className)}
    >
      <div>
        <ButtonCenter className="h-10 w-24">
          <span className={"font-bold text-2xl font-serif"}>
            {archive.year}
          </span>
        </ButtonCenter>
      </div>
      <div className="sm:ml-8">
        {archive.mds.map((md, index: number) => {
          return (
            <TimelineBlock
              className="mt-4"
              key={index}
              month={md.month}
              day={md.day}
              data={md.data}
            />
          );
        })}
      </div>
    </RadiusContainer>
  );
}
