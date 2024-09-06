import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Main } from "@pages";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Main />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
