export const getPosterUrl = (posterUrl: string): string => {
  return import.meta.env.VITE_ANILIBRIA_CONTENT_URL.concat(posterUrl);
};
