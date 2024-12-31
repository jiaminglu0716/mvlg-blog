import SearchNavigation from "../../../containers/web/navigation/search-navigation";
import ProfileBlockContainer from "../../../containers/web/block/profile-block";
import ArchiveBlockContainer from "../../../containers/web/block/archive-block";
import { ArchiveLinkY1M } from "../../../services/post/domain/Archive";
import { QListPost } from "../../../services/post/query/QListPost";
import { QPostStats } from "../../../services/post/query/QPostStat";
import { QListTag } from "../../../services/post/query/QListTag";
import Container from "../../../components/container/container";
import TagBlockContainer from "../block/tags-block";
import { QCountTagList } from "../../../services/post/query/QCountTagList";

export default function BlockLayoutContainer({
  posts,
  tags,
  archives,
  stat,
  toptags,
  children,
}: {
  posts: QListPost[];
  tags: QListTag[];
  archives: ArchiveLinkY1M;
  stat: QPostStats;
  toptags: QCountTagList;
  children: React.ReactNode;
}) {
  return (
    <Container className="flex-1 my-4">
      <div className="my-4">
        <SearchNavigation posts={posts} tags={tags} />
      </div>
      <div className="flex justify-left">
        <div className="flex-1 w-72 mr-4 hidden lg:block">
          <ProfileBlockContainer stat={stat} />
          <ArchiveBlockContainer
            className="mt-4"
            data={archives}
            colnum={4}
            rownum={3}
          />
          <TagBlockContainer className="mt-4" tags={toptags} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}
