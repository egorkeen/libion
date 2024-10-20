import { CarouselRenderer, MessageDisplay } from "@components";
import styles from "./Franchises.module.scss";
import { FC, useMemo, useState } from "react";
import { Franchise, FranchiseDetails } from "@utils/types";
import listButton from "@assets/listButton.svg";
import clsx from "clsx";

const useGetCarouselProps = (ids: number[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const result = useMemo(
    () => ({
      hasNext: currentPage * 4 < ids.length,
      hasPrev: currentPage !== 1,
      onNext: () => setCurrentPage(currentPage + 1),
      onPrev: () => () => setCurrentPage(currentPage - 1),
      titlesIds: ids.slice((currentPage - 1) * 4, currentPage * 4),
    }),
    [currentPage, ids],
  );

  return result;
};

const CollapseFranchise: FC<{
  ids: number[];
  franchiseName: FranchiseDetails["name"];
}> = ({ ids, franchiseName }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const carouselProps = useGetCarouselProps(ids);

  return (
    <div className={styles.franchise}>
      <div
        onClick={() => setCollapsed(!isCollapsed)}
        className={styles.collapse}
      >
        <h3 className={styles.title}>{franchiseName}</h3>
        <img
          src={listButton}
          className={clsx(styles.icon, { [styles.isCollapsed]: isCollapsed })}
          alt={franchiseName}
        />
      </div>
      <div className={clsx({ [styles.hidden]: isCollapsed })}>
        <CarouselRenderer {...carouselProps} />
      </div>
    </div>
  );
};

export const Franchises: FC<{ franchises: Franchise[] }> = ({ franchises }) => {
  if (!franchises?.length) {
    return <MessageDisplay>Франшизы не найдены</MessageDisplay>;
  }
  return (
    <div className={styles.franchises}>
      {franchises.map((franchiseItem, index) => {
        const { franchise, releases } = franchiseItem;
        const ids = releases.map((value) => value.id);
        return (
          <CollapseFranchise
            key={index}
            ids={ids}
            franchiseName={franchise.name}
          />
        );
      })}
    </div>
  );
};
