import { FC } from "react";
import styles from "./SeriesItem.module.scss";

type SeriesItemProps = {
  preview: string;
  order: string;
};

export const SeriesItem: FC<SeriesItemProps> = ({ preview, order }) => {
  return (
    <article className={styles.seriesItem}>
      <img className={styles.preview} src={preview} />
      <span className={styles.order}>{order} серия</span>
    </article>
  );
};
