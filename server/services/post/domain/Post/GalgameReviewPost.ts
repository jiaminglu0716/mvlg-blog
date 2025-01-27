import { GalgamePlatform } from "./GamePlatform";
import { Post } from "./Post";
import { PostType } from "./PostType";

export type GalgameMeta = {
  name: string;
  names?: string[];
  country?: string;
  developer?: string[];
  publisher?: string[];
  director?: string[];
  voices?: string[];
  art?: string[];
  script?: string[];
  soundtrack?: string[];
};

export type GalgamePlaytimeRecord = {
  platform: GalgamePlatform;
  startAt: string;
  finishAt: string;
  playDays: number | string;
  gapDays: number | string;
  total: string;
  status: string;
};

export type GalgamePlayReviewRecord = {
  score?: number;
  review: string;
  date: string;
  star?: boolean;
};

export class GalgameReviewPost extends Post {
  private _meta: GalgameMeta;
  private _playrecs: GalgamePlaytimeRecord[];
  private _reviews: GalgamePlayReviewRecord[];

  public constructor() {
    super();
    this._type = PostType.GALGAME_REVIEW;
  }

  /**
   * @Factory
   */
  public static post(): GalgameReviewPost {
    return new GalgameReviewPost();
  }

  /**
   * @builder
   */
  public meta(value?: GalgameMeta): this {
    if (!value) return this;
    this._meta = value;
    return this;
  }

  public playrecs(value?: GalgamePlaytimeRecord[]): this {
    if (!value) return this;
    this._playrecs = value;
    return this;
  }

  public reviews(value?: GalgamePlayReviewRecord[]): this {
    if (!value) return this;
    this._reviews = value;
    return this;
  }
}
