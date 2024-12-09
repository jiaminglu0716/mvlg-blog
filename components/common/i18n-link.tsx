import Link from "next/link";
import { UrlObject } from "url";

type Url = string | UrlObject;
type InternalLinkProps = {
  href: Url;
  as?: Url;
  replace?: boolean;
  passHref?: boolean;
  prefetch?: boolean | null;
  locale?: string | false;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type I18nLinkProps = InternalLinkProps & {
  children?: React.ReactNode;
  className: string;
};

export default function I18nLink({
  href,
  as,
  replace,
  passHref,
  prefetch,
  locale,
  onMouseEnter,
  onTouchStart,
  onClick,
  children,
  className,
}: I18nLinkProps) {
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      onClick={onClick}
      className={className}
    >
      {children}
    </Link>
  );
}
