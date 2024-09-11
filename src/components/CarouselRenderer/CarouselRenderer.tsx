import { Title } from "@utils/types";
import { FC } from "react";
import styles from "./CarouselRenderer.module.scss";
import prev from "@assets/prevButton.svg";
import next from "@assets/nextButton.svg";
import { TitleCard } from "../TitleCard";

type CarouselRendererProps = {
  titles: Title[];
  hasPrev: boolean;
  onPrev: () => void;
  hasNext: boolean;
  onNext: () => void;
};

export const CarouselRenderer: FC<CarouselRendererProps> = (props) => {
  const { titles, hasNext, hasPrev, onNext, onPrev } = props;
  return (
    <div className={styles.carouselRenderer}>
      {hasPrev && (
        <button className={styles.prevButton} onClick={onPrev}>
          <img src={prev} alt="Назад" />
        </button>
      )}

      {titles.map((title) => (
        <TitleCard
          key={title.id}
          id={title.id}
          name={title.names.ru}
          poster={title.posters.original.url}
        />
      ))}

      {hasNext && (
        <button className={styles.nextButton} onClick={onNext}>
          <img src={next} alt="Далее" />
        </button>
      )}
    </div>
  );
};
