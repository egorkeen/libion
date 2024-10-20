import { FC } from "react";
import styles from "./Series.module.scss";
import { Player } from "@utils/types";
import { SeriesItem } from "./components";
import { getPosterUrl } from "@utils/helpers";
import { MessageDisplay } from "@components";

type SeriesProps = {
  series: Player["list"];
};

export const Series: FC<SeriesProps> = ({ series }) => {
  if (!Object.keys(series).length) {
    return <MessageDisplay>Список серий не найден</MessageDisplay>;
  }
  return (
    <div className={styles.series}>
      {Object.entries(series).map(([order, seriesItem]) => (
        <SeriesItem
          key={order}
          order={order}
          preview={getPosterUrl(seriesItem.preview)}
        />
      ))}
    </div>
  );
};
