import { InferGetStaticPropsType } from "next";
import { PaginationParamLink } from "../services/common/utils/PaginationLink";

function HomePage({ dates }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* <div className="flex flex-wrap ">
        <div className="m-auto">
          <ArchivesBlock colNum={4} dates={dates} />
        </div>
      </div> */}
      {/* 
      <Avatar size={100} src="/desk.jpg" />
      <Container>
        <div className="space-y-6">
          <h1>Test</h1>
          <h1 className="text-2xl font-bold">
            Hey, I'm a Senior Software Engineer at Company. I enjoy working with
            Next.js and crafting beautiful front-end experiences.
          </h1>
          <p>
            This portfolio is built with Next.js and a library called next-mdx.
            It allows you to write Markdown and focus on the content of your
            portfolio.
          </p>

          <p>Deploy your own in a few minutes.</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div> */}

      {/* <CoverPageContainer /> */}
    </>
  );
}

export async function getStaticProps() {
  // const allPosts = getAllPosts(["date"]);
  // const dates = allPosts.map((post) => new Date(post.date));

  const dateDict = {};

  // dates.forEach((date: Date) => {
  //   const year = date.getFullYear() % 100;
  //   const month = date.getMonth() + 1;

  //   if (!dateDict[year]) {
  //     dateDict[year] = {};
  //   }

  //   if (!dateDict[year][month]) {
  //     dateDict[year][month] = 0;
  //   }

  //   dateDict[year][month] += 1;
  // });

  /**
   *
   */
  // console.log(getAllPostsByMonth(new Date("2021-03"), ["date"]));

  // const ps = new Post();
  // console.log(ps.get());

  // const links = new PostQueryService().listStats();
  // console.log(links);

  // console.log(
  //   new PaginationParamLink("root/00123?aabc=123&jjj=123")
  //     .root()
  //     .link(2)
  //     .withQuery()
  //     .cget()
  // );

  // console.log(new PaginationParamLink("root/00123").link(5).cget());
  // console.log(
  //   new PaginationParamLink("/posts/2").root().link(5).withQuery().cget()
  // );
  return {
    props: {
      dates: dateDict,
    },
  };
}

export default HomePage;
