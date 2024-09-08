export const getPosterUrl = (posterUrl: string): string => {
  return import.meta.env.VITE_ANILIBRIA_CONTENT_URL.concat(posterUrl);
};

export const toArray = (value: unknown) =>
  Array.isArray(value) ? (value as any[]) : ([] as any[]);

export const isObject = (value: unknown): value is Record<string, any> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
