import { FC, ReactNode } from "react";
import styles from "./MessageDisplay.module.scss";

type MessageDisplayProps = {
  children: ReactNode;
};

export const MessageDisplay: FC<MessageDisplayProps> = ({
  children: messageContent,
}) => {
  return <div className={styles.container}>{messageContent}</div>;
};
