import { FC } from "react";
import clsx from "clsx";
import styles from "./Tab.module.scss";

type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const Tab: FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, { [styles.active]: isActive })}
    >
      {label}
    </button>
  );
};
