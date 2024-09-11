import clsx from "clsx";
import styles from "./Footer.module.scss";
import logo from "@assets/FooterLogo.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} className={styles.logo} alt="Libion" />
      <div className={styles.columns}>
        <div className={styles.leftColumn}>
          <span className={clsx(styles.text, styles.bold)}>
            Разработчик:&nbsp;
            <a
              target="_blank"
              href="https://t.me/egorkeen"
              className={clsx(styles.text, styles.thin)}
            >
              Egor Kirienko
            </a>
          </span>
          <span className={clsx(styles.text, styles.bold)}>
            Дизайнер:&nbsp;
            <a
              target="_blank"
              href="https://www.behance.net/anastasazareto"
              className={clsx(styles.text, styles.thin)}
            >
              Anastasia Azaretova
            </a>
          </span>
          <a className={clsx(styles.text, styles.bold)}>GitHub</a>
          <a className={clsx(styles.text, styles.bold)}>Anilibria API</a>
        </div>

        <div className={styles.rightColumn}>
          <NavLink className={styles.text} to="/">
            Главная
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
