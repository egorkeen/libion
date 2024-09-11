import { getPosterUrl } from "@utils/helpers";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./TitleCard.module.scss";
import mask from "@assets/cardMask.svg";

type TitleCardProps = {
  poster: string;
  id: number;
  name: string;
};

export const TitleCard: FC<TitleCardProps> = (props) => {
  const { id, name, poster } = props;
  return (
    <Link className={styles.wrapper} to={`/title/${id}`}>
      <h3 className={styles.name}>{name}</h3>
      <article className={styles.card}>
        <img className={styles.poster} src={getPosterUrl(poster)} alt={name} />
        <img src={mask} className={styles.mask} />
      </article>
    </Link>
  );
};
