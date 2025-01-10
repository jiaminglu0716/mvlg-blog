import { InferGetStaticPropsType } from "next";
import CoverView from "../web/views/web/cover-view";
import profileData from "../data/profile.json";
import { ProfileType } from "../web/interfaces/api";

function HomePage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CoverView profile={profileData as ProfileType} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage;
