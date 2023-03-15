import React from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  cb: () => void;
  title?: string;
  style?: React.CSSProperties;
}

const Button = (props: IButtonProps) => {
  return (
    <button style={props.style} className={styles.button} onClick={props.cb}>
      {props.title}
    </button>
  );
};

export default Button;
