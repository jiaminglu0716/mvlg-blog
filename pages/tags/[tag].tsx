import { getAllTags, getAllPostsByTag, postFields } from "../../modules";
import NotePage from "../posts";

export default NotePage;

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allPosts = getAllPostsByTag(params.tag, postFields.note);

  return {
    props: { allPosts },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map(({ title }) => {
      return {
        params: {
          tag: title,
        },
      };
    }),
    fallback: false,
  };
}
