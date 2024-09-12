import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Main, Title } from "@pages";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Title />} path="/title/:id/" />
      </Routes>
    </div>
  );
};

export default App;
