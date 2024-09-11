import clsx from "clsx";
import { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  buttonType?: "default";
  size?: "default";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const buttonStylesMap = {
  default: styles.default,
};

export const Button: FC<ButtonProps> = ({
  buttonType = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx(buttonStylesMap[buttonType], className)} {...props}>
      {children}
    </button>
  );
};
