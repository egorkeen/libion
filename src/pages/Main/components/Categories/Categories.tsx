import { useGetGenresQuery } from "@store/api";
import styles from "./Categories.module.scss";
import { GenreList } from "./components";
import { useState } from "react";
import { Button } from "@components";

export const Categories = () => {
  const { data: genres } = useGetGenresQuery();
  const [listsToRender, setListsToRender] = useState(2);

  if (!genres) {
    return null;
  }

  return (
    <div className={styles.categories}>
      {genres.slice(0, listsToRender).map((genre) => (
        <GenreList key={genre} genre={genre} />
      ))}
      {genres && listsToRender < genres.length && (
        <Button onClick={() => setListsToRender(listsToRender + 2)}>еще</Button>
      )}
    </div>
  );
};
