import {
  GalgameMeta,
  GalgamePlayReviewRecord,
  GalgamePlaytimeRecord,
} from "../domain/Post/GalgameReviewPost";
import { PostType } from "../domain/Post/PostType";

export type QPost = {
  type?: PostType;
  slugs?: string;
  title?: string;
  author?: string;
  link?: string;
  date?: string;
  content?: string;
  excerpt?: string;
  tags?: string[];
  star?: boolean;
  cover?: string;
};

export type QCommonPost = QPost;

export type QGalgameReviewPost = QPost & {
  meta: GalgameMeta;
  playrecs: GalgamePlaytimeRecord[];
  reviews: GalgamePlayReviewRecord[];
};

export type QListPost = QCommonPost | QGalgameReviewPost;
