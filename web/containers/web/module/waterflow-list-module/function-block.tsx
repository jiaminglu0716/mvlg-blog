import Link from "next/link";
import RadiusContainer from "../../../../components/container/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";
import { classNames } from "../../../../common";

export default function FunctionBlock({
  item,
  className,
}: {
  item: any;
  className?: string;
}) {
  return (
    <Link href={item.link} className={classNames("w-auto", className)}>
      <RadiusContainer className="flex mb-3">
        <div className="m-3">
          <IconCircle size="33" />
        </div>

        <div className="my-2">
          <h2 className="text-xl text-left p-1">{item.title}</h2>
          {item.desc ? (
            <div className="text-md text-left p-1.5">{item.desc}</div>
          ) : null}
        </div>
      </RadiusContainer>
    </Link>
  );
}
