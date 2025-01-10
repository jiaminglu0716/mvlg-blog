import { getDayTimestamp } from "../../../../lib/date";
import { and, eq } from "revt-toolkit";
import { PostQueryService } from "./PostQueryService";
import { QListPost } from "./QListPost";
import { Post } from "../domain/Post";
import { distinct } from "../../../../lib/array";
import { Pagination } from "../../../../lib/pagination";

export class ArchiveQueryService {
  private readonly postQueryService = new PostQueryService();

  private queryPosts(fields?: string[]): QListPost[] {
    return this.postQueryService.listPosts(fields);
  }

  public countByFilter(
    date: Date,
    filter: (date: Date, postDate: Date) => boolean
  ): number {
    let count = 0;

    this.queryPosts().forEach((post: QListPost) => {
      if (filter(date, new Date(post.date))) {
        count++;
      }
    });

    return count;
  }

  public countByYearMonth(date: Date): number {
    return this.countByFilter(date, (date: Date, postDate: Date) =>
      and(
        eq(date.getFullYear(), postDate.getFullYear()),
        eq(date.getMonth(), postDate.getMonth())
      )
    );
  }

  public countByYear(date: Date): number {
    return this.countByFilter(date, (date: Date, postDate: Date) =>
      eq(getDayTimestamp(date), getDayTimestamp(postDate))
    );
  }

  public countByDay(date: Date): number {
    return this.countByFilter(date, (date: Date, postDate: Date) =>
      eq(date.getFullYear(), postDate.getFullYear())
    );
  }

  public listYearMonth(): Date[] {
    const dates = this.postQueryService
      .listPosts(["date"])
      .map((post: QListPost) => {
        const date = Post.post().load(post).getDate();
        return `${date.getFullYear()}/${date.getMonth() + 1}`;
      });

    return distinct(dates).map((date: string) => new Date(date));
  }

  public listYears(): number[] {
    const years = this.postQueryService
      .listPosts(["date"])
      .map((post: QListPost) => Post.post().load(post).getDate().getFullYear());

    return distinct(years);
  }

  public byDay(
    date: Date,
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    return this.postQueryService.listPostsByFilter(
      (post: Post) =>
        eq(getDayTimestamp(date), getDayTimestamp(post.getDate())),
      fields,
      pagination
    );
  }

  public byYear(
    date: Date,
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    return this.postQueryService.listPostsByFilter(
      (post: Post) => eq(date.getFullYear(), post.getDate().getFullYear()),
      fields,
      pagination
    );
  }

  public byYearMonth(
    date: Date,
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    return this.postQueryService.listPostsByFilter(
      (post: Post) =>
        and(
          eq(date.getFullYear(), post.getDate().getFullYear()),
          eq(date.getMonth(), post.getDate().getMonth())
        ),
      fields,
      pagination
    );
  }
}
