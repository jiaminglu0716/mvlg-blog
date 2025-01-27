import { classNames } from "../../../../common";
import { DivProps } from "../../../../components/common/props";
import RadiusContainer from "../../../../components/container/radius-container";
import IconStarFill from "../../../../components/icons/icon-star-fill";

export type PostReviewProps = {
  date?: string;
  index?: number;
  score?: number;
  review: string;
  star?: boolean;
};

export default function PostReviewItem({
  date,
  index,
  score,
  review,
  star,
  className,
  ...props
}: PostReviewProps & DivProps) {
  return (
    <RadiusContainer className={classNames("p-3 pb-0", className)} {...props}>
      <div className="px-2 flex justify-between">
        <div className="justify-left">
          {index ? <span className="mr-4">No. {index}</span> : null}
          {score && (
            <span className="mr-4">
              <b>score:</b>&nbsp;
              <span className="text-md">{score}</span>
            </span>
          )}
          {date && (
            <span>
              <b>date:</b>&nbsp;
              <span className="text-sm text-slate-500">{date}</span>
            </span>
          )}
        </div>
        <div>{star && <IconStarFill size="22" />}</div>
      </div>
      <div
        className="p-2 text-justify text-sm"
        dangerouslySetInnerHTML={{
          __html: review.replaceAll("\n", "<br>"),
        }}
      />
    </RadiusContainer>
  );
}
