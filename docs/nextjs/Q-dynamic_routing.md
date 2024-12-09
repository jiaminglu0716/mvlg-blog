## Catch-all

'/posts/[...slug]' will match '/posts/test/abc/jack.md'.

1. However, this is the latest nextjs, that means we can't use '/posts/[...slug]/page.tsx' to define it. Else it will throw error not the last.

2. We can access the posts list, but we can't access the detail post by url. How to resolve? I find this sample with string to define slug, but the office say if u want to parse '[...slug]', we need to update function in this file. The most important thing is that slug is string array. If slug is string, we only use '[slug]' to define single var in url, which means we can't use catch-all.

```ts
// slug: string[]
export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
```

3. We can't define fs in the page. But, InferGetStaticPropsType can declare which functions we can use fs.

```ts
export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {}
```
