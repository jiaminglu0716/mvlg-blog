import { InferGetStaticPropsType } from "next";
import CoverView from "../views/web/cover-view";

function HomePage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CoverView />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage;
