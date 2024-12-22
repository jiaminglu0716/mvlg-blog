import { and, eq } from "revt-toolkit";
import { Post } from "./Post";
import { getDayTimestamp } from "../../../lib/date";
import { findDictFromArray, last, top } from "../../../lib/array";

export type ArchiveY2MD<T extends any> = {
  year: number;
  mds: {
    month: number;
    day: number;
    data: T[];
  }[];
}[];

export class Archive {
  private _posts: Post[];

  public constructor() {
    this._posts = [];
  }

  public posts(posts: Post[]): this {
    this._posts = posts;
    return this;
  }

  public post(post: Post): this {
    this._posts.push(post);
    return this;
  }

  public sorted(desc: boolean = false): this {
    this._posts.sort(
      (post1, post2) =>
        (desc ? 1 : -1) *
        (new Date(post1.getDate()).getTime() >
        new Date(post2.getDate()).getTime()
          ? -1
          : 1)
    );
    return this;
  }

  public topY2MD<T>(y2md: ArchiveY2MD<T>): T {
    return top(top(top(y2md)["mds"])["data"]);
  }

  public lastY2MD<T>(y2md: ArchiveY2MD<T>): T {
    return last(last(last(y2md)["mds"])["data"]);
  }

  public byY2MD<T>(
    format: (post: Post) => any = (post) => post
  ): ArchiveY2MD<T> {
    const y2md = [];

    this._posts.forEach((post: Post) => {
      const date = post.getDate();
      const [year, month, day] = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
      ];

      let yearItem = findDictFromArray(y2md, (value) => value["year"] == year);

      if (!yearItem) {
        yearItem = { year, mds: [] };
        y2md.push(yearItem);
      }

      const mds = yearItem["mds"];

      let mdItem = findDictFromArray(
        mds,
        (value) => value["month"] == month && value["day"] == day
      );

      if (!mdItem) {
        mdItem = {
          month,
          day,
          data: [],
        };

        mds.push(mdItem);
      }

      mdItem.data.push(format(post));
    });

    return y2md;
  }
}
