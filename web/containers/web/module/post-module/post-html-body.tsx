import { classNames } from "../../../../common";
import { DivProps } from "../../../../components/common/props";

export default function PostHtmlBody({
  content,
  className,
  ...props
}: DivProps & { content: string }) {
  return (
    <div
      key="markdown-body"
      className={classNames("text-justify markdown-body", className)}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      {...props}
    />
  );
}
