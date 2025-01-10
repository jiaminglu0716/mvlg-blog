import { InferGetStaticPropsType } from "next";
import BlockLayoutContainer from "../../web/containers/web/layout";
import ViewContainer from "../../web/components/container/view-container";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import RadiusContainer from "../../web/components/container/radius-container";
import IconCircle from "../../web/components/icons/icon-circle";
import Link from "next/link";
import homeData from "../../data/home.json";

export default function HomePage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const blocks = homeData.modules.map((module, modIdx: number) => {
    return (
      <div className="mb-5" key={modIdx}>
        <RadiusContainer className="mb-5 w-fit py-2 px-5">
          <h2 className="text-left text-slate-900 text-2xl">{module.name}</h2>
        </RadiusContainer>
        <div className="w-full sm:columns-2 lg:columns-3 sm:gap-8">
          {module.list.map((item, itemIdx: number) => {
            return (
              <Link href={item.link} key={itemIdx} className="w-auto">
                <RadiusContainer key={itemIdx} className="flex mb-3">
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
          })}
        </div>
      </div>
    );
  });

  return (
    <BlockLayoutContainer {...layout}>
      <ViewContainer className="flex-1 justify-center font-serif">
        {blocks}
      </ViewContainer>
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  const layout = new LayoutQueryService().queryLayoutData();

  return {
    props: {
      layout,
    },
  };
}
