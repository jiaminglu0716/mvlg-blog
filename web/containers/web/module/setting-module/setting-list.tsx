import SettingItem, { SettingItemProps } from "./setting-item";

export default function SettingListContainer({
  items,
}: {
  items: SettingItemProps[];
}) {
  return (
    <div className="w-full sm:columns-2 sm:gap-8">
      {items.length > 0 &&
        items.map((item, itemIdx: number) => {
          return <SettingItem key={itemIdx} {...item} />;
        })}
    </div>
  );
}
