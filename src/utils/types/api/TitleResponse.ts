import { Genre } from "@utils/constants";

export interface Title {
  id: number;
  code: string;
  names: Names;
  franchises: Franchise[];
  announce: string;
  status: Status;
  posters: Posters;
  updated: number;
  last_change: number;
  type: Type;
  genres: Genre[];
  team: Team;
  season: Season;
  description: string;
  in_favorites: number;
  blocked: Blocked;
  player: Player;
  torrents: Torrents;
}

export interface Names {
  ru: string;
  en: string;
  alternative: string | null;
}

export interface Franchise {
  franchise: FranchiseDetails;
  releases: Release[];
}

export interface FranchiseDetails {
  id: string;
  name: string;
}

export interface Release {
  id: number;
  code: string;
  ordinal: number;
  names: Names;
}

interface Status {
  string: string;
  code: number;
}

export interface Posters {
  small: Poster;
  medium: Poster;
  original: Poster;
}

export interface Poster {
  url: string;
  raw_base64_file: string | null;
}

export interface Type {
  full_string: string;
  string: string;
  episodes: number | null;
  length: number;
  code: number;
}

export interface Team {
  voice: string[];
  translator: string[];
  editing: string[];
  decor: string[];
  timing: string[];
}

export interface Season {
  string: string;
  code: number;
  year: number;
  week_day: number;
}

export interface Blocked {
  blocked: boolean;
  bakanim: boolean;
}

export interface Player {
  alternative_player: string | null;
  host: string;
  episodes: Episodes;
  list: Record<number, Episode>;
  rutube: Record<string, any>;
}

export interface Episodes {
  first: number;
  last: number;
  string: string;
}

export interface Episode {
  episode: number;
  name: string | null;
  uuid: string;
  created_timestamp: number;
  preview: string | null;
  skips: Skips;
  hls: HLS;
}

export interface Skips {
  opening: number[];
  ending: number[];
}

export interface HLS {
  fhd: string;
  hd: string;
  sd: string;
}

export interface Torrents {
  episodes: Episodes;
  list: Torrent[];
}

export interface Torrent {
  torrent_id: number;
  episodes: Episodes;
  quality: Quality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: Metadata | null;
  raw_base64_file: string | null;
}

export interface Quality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: boolean | null;
}

export interface Metadata {
  hash: string;
  name: string;
  announce: string[];
  created_timestamp: number;
  files_list: File[];
}

export interface File {
  file: string;
  size: number;
  size_string: string;
  offset: number;
}
