import { ReactNode } from "react";
import styles from "./toast.module.css";

interface ToastProps {
  children: ReactNode;
}

const Toast = (props: ToastProps) => {
  return <div className={styles.input}>{props.children}</div>;
};

export default Toast;
