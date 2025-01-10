import SearchNavigation from "../../../containers/web/navigation/search-navigation";
import ProfileBlockContainer from "../../../containers/web/block/profile-block";
import ArchiveBlockContainer from "../../../containers/web/block/archive-block";
import Container from "../../../components/container/container";
import TagBlockContainer from "../block/tags-block";

export default function BlockLayoutContainer({
  posts,
  tags,
  archives,
  stat,
  toptags,
  profile,
  children,
}: {
  posts: any[];
  tags: any[];
  archives: any;
  stat: any;
  toptags: any[];
  profile: any;
  children: React.ReactNode;
}) {
  return (
    <Container className="flex-1 my-4">
      <div className="my-4">
        <SearchNavigation posts={posts} tags={tags} />
      </div>
      <div className="flex justify-left">
        <div className="flex-1 w-72 mr-4 hidden lg:block">
          <ProfileBlockContainer profile={profile} stat={stat} />
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
