import { colorByGenre, Genre } from "@utils/constants";
import { FC } from "react";
import styles from './Tag.module.scss';

type TagProps = {
  genre: Genre;
};

export const Tag: FC<TagProps> = ({ genre }) => {
  const [borderColor, backgroundColor] = colorByGenre[genre];
  return (
    <span className={styles.tag} style={{ backgroundColor, border: `2px solid ${borderColor}` }}>
      {genre}
    </span>
  );
};
