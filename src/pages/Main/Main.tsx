import { Header } from "@components";
import { SearchBar } from "./components";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      {/* TODO: реализовать карусель */}
      <SearchBar />
    </div>
  );
};
