import type { InferGetStaticPropsType } from "next";
import LinksView from "../../views/web/links-view";

export default function LinksPage({
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <LinksView links={links} />;
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
    props: { links },
  };
}
