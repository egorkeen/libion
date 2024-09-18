import { Properties } from "@utils/constants";

export interface TitleParams {
  type: "code" | "id";
  title: string;
  filter?: Properties[];
  remove?: Properties[];
}

export interface ListOfTitlesParams {
  type: "code" | "id";
  titlesList: number[];
  filter?: Properties[];
  remove?: Properties[];
}

export interface SearchParams {
  query: string;
  year?: string;
  genres?: string[];
  filter?: Properties[];
  remove?: Properties[];
  limit?: number;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

export interface FeedParams {
  filter?: Properties[];
  remove?: Properties[];
  include?: string[];
  limit?: number;
  since?: number;
  description_type?: "html" | "plain" | "no_view_order";
  playlist_type?: "object" | "array";
  after?: number;
}
