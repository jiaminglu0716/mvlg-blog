type SVGProps = {
  size?: string;
  viewSize?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  children: React.ReactNode;
  [key: string]: any;
};

export default function SVG({
  size,
  viewBox,
  viewSize = "960",
  fill = "#000000",
  children,
  stroke = "currentColor",
  ...props
}: SVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox ?? `0 0 ${viewSize} ${viewSize}`}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}
