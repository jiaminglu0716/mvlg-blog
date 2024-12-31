import { useEffect, useState } from "react";
import { trad } from "../modules/record";

export default function Record() {
  const [text, setText] = useState(
    trad([
      "y 2024",
      "m 12",
      "d 30",
      "- 12:13",
      "- 14:15",
      "asdadasdad",
      "- 15:13",
      "asdad",
    ])?.statistic?.event?.getCountMetas().branchNum
  );

  function SSS() {
    setText(
      trad([
        "y 2024",
        "m 6",
        "d 2",
        "- 20:35",
        "- 22:24",
        "aaaaaaaaa",
        "bbbbbbbbb",
        "c -1 1 [t1]",
        "d 3",
        "- 21:33",
        "ccccccccc",
        "aaaaaaaaa",
        "c 1 2 [t2] s ",
        "- 21:43",
        "ccccccccc",
        "aaaaaaaaa",
        "c 2 3 [t3] s",
        "- 23:43",
        "ccccccccc",
        "aaaaaaaaa",
        "c 1 4 [t4]",
      ]).statistic.event.getCountMetas().branchNum
    );
  }

  return (
    <div>
      <p>/// {text} ///</p>
      <p onClick={SSS}>Change</p>
    </div>
  );
}
