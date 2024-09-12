import { Footer, Header } from "@components";
import styles from "./Title.module.scss";
import { useParams } from "react-router-dom";
import { useGetTitleQuery } from "@store/api";
import { TitleContent } from "./components";

export const Title = () => {
  const { id = "" } = useParams();
  const { data } = useGetTitleQuery({ title: id, type: "id" });

  return (
    <div className={styles.title}>
      <Header />
      {data && <TitleContent title={data} />}
      <Footer />
    </div>
  );
};
