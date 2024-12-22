import { InferGetStaticPropsType } from "next";
import ViewContainer from "../components/container/view-container";
import PrevButtonSM from "../components/button/prev-button-sm";
import TopButtonSM from "../components/button/top-button-sm";
import NextButtonSM from "../components/button/next-button-sm";

function HomePage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const blocks = <>asd</>;

  return (
    <ViewContainer>
      <div className="flex justify-between">
        <PrevButtonSM className="m-2" onClick={() => {}} />
      </div>

      <div>{blocks}</div>

      <div className="flex justify-center">
        <div className="flex">
          <PrevButtonSM className="m-2" onClick={() => {}} />
          <TopButtonSM className="m-2" onClick={() => {}} />
          <NextButtonSM className="m-2" onClick={() => {}} />
        </div>
      </div>
    </ViewContainer>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage;
