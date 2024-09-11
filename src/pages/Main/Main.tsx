import { Footer, Header } from "@components";
import { Categories, SearchBar } from "./components";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      {/* TODO: реализовать карусель */}
      <SearchBar />
      <Categories />
      <Footer />
    </div>
  );
};
