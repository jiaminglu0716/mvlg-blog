import { InferGetStaticPropsType } from "next";
// import { RevtService } from "../../web/services/revt-service";
import useLocaleService from "../../../web/hooks/useLocaleService";

function HomePage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  // useEffect(() => {
  //   const { origin, pathname, search } = window.location;
  //   console.log(origin, pathname, search);
  // }, []);
  const props = useLocaleService();
  // const { locale, setLocale } = useLocale();

  // useEffect(() => {
  //   setLocale("hk");
  // }, []);

  // console.log(storage.getToken());

  return (
    <>
      {/* <div className="flex flex-wrap ">
        <div className="m-auto">
          <ArchiveBlockContainer data={archives} colnum={4} rownum={5} />
          <ProfileBlockContainer stat={stat} />
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  // console.log(process.env.NODE_ENV);
  // console.log(process.env.__NEXT_PRIVATE_ORIGIN);
  // fetch("http://localhost:3000/api/test").then((res) => {
  //   console.log(res);
  // });
  // console.log(link("a"));

  // const stat = new RevtService().statistic([
  //   "y 2024",
  //   "m 6",
  //   "d 2",
  //   "- 20:35",
  //   "- 22:24",
  //   "aaaaaaaaa",
  //   "bbbbbbbbb",
  //   "c -1 1 [t1]",
  //   "d 3",
  //   "- 21:33",
  //   "- 21:34",
  //   "ccccccccc",
  //   "aaaaaaaaa",
  //   "c 1 2 [t2] s ",
  //   "- 21:43",
  //   "ccccccccc",
  //   "aaaaaaaaa",
  //   "c 2 3 [t3] s",
  //   "- 23:43",
  //   "ccccccccc",
  //   "aaaaaaaaa",
  //   "c 1 4 [t4]",
  // ]);

  // console.log(stat);
  // console.log(test);

  return {
    props: {
      // test,
    },
  };
}

export default HomePage;
