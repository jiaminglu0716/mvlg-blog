import { classNames } from "../../../common";
import { DivProps } from "../props";

function Td({
  children,
  cidx,
  className,
  ...props
}: DivProps & { cidx?: number }) {
  return (
    <div
      key={cidx}
      className={classNames(
        "h-full py-2 px-2 border-none text-sm flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function Th({
  children,
  cidx,
  className,
  ...props
}: DivProps & { cidx?: number }) {
  return (
    <div
      key={cidx}
      className={classNames(
        "py-2 px-2 font-semibold text-[0.9rem] flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default function SimpleLineTable({
  data,
  title,
  index,
  className,
  ...props
}: Omit<DivProps, "title" | "children"> & {
  data: any[][];
  title: string[];
  index?: boolean;
}) {
  const [rowsize, colsize] = [data.length, data[0]?.length ?? 0];

  if (rowsize < 1 || colsize < 1) return null;

  function indexCol() {
    const rowData = [];
    for (let i = 0; i < rowsize; i++) {
      rowData.push(
        <Td
          key={i}
          className={classNames(
            "justify-center",
            i % 2 == 1 ? "bg-[#F2F2F2]" : "bg-white"
          )}
        >
          {i + 1}
        </Td>
      );
    }

    return (
      <div className="flex flex-col">
        <Th key="No." className="bg-[#F2F2F2]">
          No.
        </Th>
        {...rowData}
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "max-w-full m-auto my-5 text-left text-[#1f2328] flex flex-row justify-center",
        className
      )}
      {...props}
    >
      {index && indexCol()}
      {...title.map((feature, cidx: number) => {
        const rowData = [];
        for (let i = 0; i < rowsize; i++) {
          rowData.push(
            <Td
              key={i}
              className={classNames(i % 2 == 1 ? "bg-[#F2F2F2]" : "bg-white")}
            >
              {data[i][cidx]}
            </Td>
          );
        }

        return (
          <div className="flex flex-col">
            <Th key={feature} className="bg-[#F2F2F2]">
              {feature}
            </Th>
            {...rowData}
          </div>
        );
      })}
    </div>
  );
}
