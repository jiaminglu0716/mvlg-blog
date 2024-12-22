import LinkListModule from "./link-list-module";

export default function LinkListContainer({ categorys }: { categorys: any[] }) {
  return (
    <div>
      {categorys.map((category, rowidx: number) => {
        return <LinkListModule key={rowidx} category={category} />;
      })}
    </div>
  );
}
