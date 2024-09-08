import { Properties } from "@utils/constants";
import { TitleResponse } from "./TitleResponse";
import { YoutubeResponse } from "./YoutubeResponse";

export interface YoutubeItem {
  youtube: YoutubeResponse;
}

export interface TitleItem {
  title: FeedTitle;
}

export type FeedResponse = {
  list: YoutubeItem[] | TitleItem[];
};

export type FeedTitleProperties =
  | Properties.names
  | Properties.genres
  | Properties.id
  | Properties.player;

export type FeedTitle = Pick<TitleResponse, FeedTitleProperties>;
