import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "@assets/logo.svg";
import random from "@assets/random.svg";
import favorites from "@assets/favorites.svg";
import { Button } from "../Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="Логотип" />
      </NavLink>

      <div className={styles.navButtons}>
        <NavLink to="/">
          <img src={random} className={styles.icon} />
        </NavLink>

        <NavLink to="/">
          <img src={favorites} className={styles.icon} />
        </NavLink>

        <NavLink to="/">
          <Button>Войти</Button>
        </NavLink>
      </div>
    </header>
  );
};
