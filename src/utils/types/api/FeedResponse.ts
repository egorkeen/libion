import { Properties } from "@utils/constants";
import { TitleResponse } from "./TitleResponse";
import { YoutubeResponse } from "./YoutubeResponse";

export type FeedResponse = {
  list: YoutubeItem[] | TitleItem[];
};

interface YoutubeItem {
  youtube: YoutubeResponse;
}

export type FeedTitleProperties =
  | Properties.names
  | Properties.description
  | Properties.season
  | Properties.posters
  | Properties.genres
  | Properties.id;

export type FeedTitle = Pick<TitleResponse, FeedTitleProperties>;

interface TitleItem {
  title: FeedTitle;
}
