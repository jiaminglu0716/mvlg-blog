import React from "react";
import TimelineModule from "./timeline-module";

export default function TimelineModuleContainer({
  items,
  className,
}: {
  items: any[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((yearItem, rowidx: number) => {
        return yearItem ? (
          <TimelineModule
            key={rowidx}
            className="mt-2 mb-5"
            archive={yearItem}
          />
        ) : null;
      })}
    </div>
  );
}
