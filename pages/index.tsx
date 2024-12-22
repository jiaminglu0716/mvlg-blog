import { InferGetStaticPropsType } from "next";
import ViewContainer from "../components/container/view-container";
import PrevButtonSM from "../components/button/prev-button-sm";
import TopButtonSM from "../components/button/top-button-sm";
import NextButtonSM from "../components/button/next-button-sm";
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
