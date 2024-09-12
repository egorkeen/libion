import { FC } from "react";
import styles from "./Series.module.scss";
import { Player } from "@utils/types";
import { SeriesItem } from "./components";
import { getPosterUrl } from "@utils/helpers";

type SeriesProps = {
  series: Player["list"];
};

export const Series: FC<SeriesProps> = ({ series }) => {
  return (
    <div className={styles.series}>
      {Object.entries(series).map(([order, seriesItem]) => (
        <SeriesItem order={order} preview={getPosterUrl(seriesItem.preview)} />
      ))}
    </div>
  );
};
