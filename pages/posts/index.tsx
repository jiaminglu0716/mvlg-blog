import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/common/container";
import distanceToNow from "../../lib/dateRelative";
import {
  currentLocale,
  getAllPosts,
  getLocales,
  i18n,
  postFields,
  switchLocale,
} from "../../modules";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NotePage({
  allPosts,
  i18n,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => {
          return (
            <article key={post.link} className="flex mb-10">
              <div className="p-2">
                <Image
                  src={"/desk.jpg"}
                  alt="my desk"
                  width={200}
                  height={150}
                />
              </div>
              <div className="p-2">
                <Link
                  href={post.link}
                  // href={`/posts/${post.slug.join("/")}`}
                  className="text-lg leading-6 font-bold"
                >
                  {post.title}
                </Link>
                <p>{post.excerpt ?? "Empty"}</p>
                <div className="text-gray-400">
                  <time>{distanceToNow(new Date(post.date))}</time>
                </div>
              </div>
            </article>
          );
        })
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(postFields.note);

  return {
    props: { allPosts, i18n },
  };
}
