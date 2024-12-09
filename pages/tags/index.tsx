import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/common/container";
import { getAllTags } from "../../modules";

export default function TagPage({
  allTags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allTags.length ? (
        allTags.map((tag) => {
          return (
            <article key={tag.link} className="mb-10">
              <Link href={tag.link} className="text-lg leading-6 font-bold">
                {tag.title}
              </Link>
            </article>
          );
        })
      ) : (
        <p>No tags yet :/</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allTags = getAllTags();

  return {
    props: { allTags },
  };
}
