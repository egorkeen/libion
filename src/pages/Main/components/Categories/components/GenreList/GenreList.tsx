import { FC, useEffect, useMemo, useState } from "react";
import styles from "./GenreList.module.scss";
import { CarouselRenderer } from "@components";
import { useSearchTitlesQuery } from "@store/api";
import { Link } from "react-router-dom";
import listButton from "@assets/listButton.svg";

const defaultListSize = 4;

type GenreListProps = {
  genre: string;
};

const getSearchTitleParams = ({
  genre,
  currentPage,
}: {
  genre: string;
  currentPage: number;
}) => ({
  query: "",
  genres: [genre],
  pagination: {
    ...(currentPage !== 1 ? { page: currentPage } : {}),
    pageSize: defaultListSize,
  },
});

export const GenreList: FC<GenreListProps> = ({ genre }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSearchTitlesQuery(
    getSearchTitleParams({ genre, currentPage }),
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!totalPages && data?.pagination.pages) {
      setTotalPages(data.pagination.pages);
    }
  }, [data, totalPages]);

  const titlesIds = useMemo(() => {
    const list = data?.list;

    if (!list) {
      return [];
    }
    return list.map((title) => title.id);
  }, [data]);

  if (!data || titlesIds.length === 0) {
    return null;
  }

  return (
    <div className={styles.genreList}>
      <Link className={styles.genreHeader} to={`/titlesByGenre/${genre}/`}>
        <h2 className={styles.headerTitle}>{genre}</h2>
        <img className={styles.listButton} src={listButton} alt={genre} />
      </Link>

      <CarouselRenderer
        titlesIds={titlesIds.slice(0, defaultListSize)}
        hasNext={currentPage < totalPages}
        hasPrev={currentPage !== 1}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
      />
    </div>
  );
};
