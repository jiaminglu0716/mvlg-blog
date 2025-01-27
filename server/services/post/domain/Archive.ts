import { findDictFromArray, last, top } from "../../../../lib/array";
import { CollectionPost } from "../utils/postType";

export class Archive {
  private _posts: CollectionPost[];

  public constructor() {
    this._posts = [];
  }

  public static archive(): Archive {
    return new Archive();
  }

  public posts(posts: CollectionPost[]): this {
    this._posts = posts;
    return this;
  }

  public post(post: CollectionPost): this {
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
    format: (post: CollectionPost) => any = (post) => post
  ): ArchiveY2MD<T> {
    const y2md = [];

    this._posts.forEach((post: CollectionPost) => {
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

  public linkByY1M(): ArchiveLinkY1M {
    const y1m = [];

    this._posts.forEach((post: CollectionPost) => {
      const date = post.getDate();
      const [year, month] = [date.getFullYear(), date.getMonth() + 1];

      let yearItem = findDictFromArray(y1m, (value) => value["year"] == year);

      if (!yearItem) {
        yearItem = { year, months: [] };
        y1m.push(yearItem);
      }

      const months = yearItem["months"];

      let monthItem = findDictFromArray(
        months,
        (value) => value["month"] == month
      );

      if (!monthItem) {
        months.push(month);
      }
    });

    return y1m;
  }
}
