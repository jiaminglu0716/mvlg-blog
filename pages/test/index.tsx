import { InferGetStaticPropsType } from "next";
import { PaginationParamLink } from "../../services/common/utils/PaginationLink";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import { PostService } from "../../web/services/post-service";
import ArchiveBlockContainer from "../../containers/web/block/archive-block";
import { QListPost } from "../../services/post/query/QListPost";
import { Post } from "../../services/post/domain/Post";
import { Archive } from "../../services/post/domain/Archive";
import TagBlockContainer from "../../containers/web/block/tags-block";
import ProfileBlockContainer from "../../containers/web/block/profile-block";
import BlockLayoutContainer from "../../containers/web/layout";
import ViewContainer from "../../components/container/view-container";
import { LayoutQueryService } from "../../services/layout/query/LayoutQueryService";

function HomePage({ layout }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* <div className="flex flex-wrap ">
        <div className="m-auto">
          <ArchiveBlockContainer data={archives} colnum={4} rownum={5} />
          <ProfileBlockContainer stat={stat} />
        </div>
      </div> */}
      <BlockLayoutContainer
        {...layout}
        children={<ViewContainer className="w-full">123</ViewContainer>}
      />
    </>
  );
}

export async function getStaticProps() {
  const layout = new LayoutQueryService().queryLayoutData();
  console.log(new PostQueryService().topTags());
  return {
    props: {
      layout,
    },
  };
}

export default HomePage;
