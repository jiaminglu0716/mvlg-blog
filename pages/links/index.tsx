import type { InferGetStaticPropsType } from "next";
import LinksView from "../../views/web/links-view";
import BlockLayoutContainer from "../../containers/web/layout";
import { LayoutQueryService } from "../../services/layout/query/LayoutQueryService";

export default function LinksPage({
  links,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlockLayoutContainer {...layout}>
      <LinksView links={links} />
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  const links = [
    {
      category: "Technology",
      links: [
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Proxy List`,
          link: "/",
        },

        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
      ],
    },

    {
      category: "Education",
      links: [
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Proxy List`,
          link: "/",
        },

        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
        {
          title: ` Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By
            Links to next Page
            For TECH
            Check what they will be
            Some Time We can access By`,
          link: "/",
        },
      ],
    },
  ];
  return {
    props: { links, layout: new LayoutQueryService().queryLayoutData() },
  };
}
