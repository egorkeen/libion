import { Properties } from "@utils/constants";
import { TitleResponse } from "./TitleResponse";

interface Pagination {
  pages: number;
  current_page: number;
  items_per_page: number;
  total_items: number;
}

export type FoundedTitleProperties =
  | Properties.names
  | Properties.description
  | Properties.season
  | Properties.posters
  | Properties.genres
  | Properties.id;

export type FoundedTitle = Pick<TitleResponse, FoundedTitleProperties>;

export interface SearchResponse {
  list: FoundedTitle[];
  pagination: Pagination;
}
