import { Title } from "@utils/types";
import { FC, useState } from "react";
import styles from "./TitleContent.module.scss";
import { getPosterUrl } from "@utils/helpers";
import likeIcon from "@assets/favorites.svg";
import likeIconActive from "@assets/likeIconActive.svg";
import { Tag } from "@components";
import { Tabs } from "../Tabs";

type TitleContentProps = {
  title: Title;
};

export const TitleContent: FC<TitleContentProps> = (props) => {
  const [isLiked, setLiked] = useState(false);
  const { title } = props;
  const { names, description, season, genres, posters, player } = title;

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <img
          src={getPosterUrl(posters.original.url)}
          className={styles.poster}
        />
        <div className={styles.about}>
          <div className={styles.aboutHeader}>
            <h3 className={styles.title}>{names.ru}</h3>
            <button onClick={() => setLiked(!isLiked)}>
              <img
                className={styles.icon}
                src={isLiked ? likeIconActive : likeIcon}
              />
            </button>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.aboutFooter}>
            <div className={styles.tags}>
              {genres.map((genre) => (
                <Tag key={genre} genre={genre} />
              ))}
            </div>
            <span className={styles.year}>{season.year} г.</span>
          </div>
        </div>
      </div>

      <Tabs series={player.list} />
    </div>
  );
};
