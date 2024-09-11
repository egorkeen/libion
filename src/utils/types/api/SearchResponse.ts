import { Title } from "./TitleResponse";

interface Pagination {
  pages: number;
  current_page: number;
  items_per_page: number;
  total_items: number;
}

export interface SearchResponse {
  list: Title[];
  pagination: Pagination;
}
