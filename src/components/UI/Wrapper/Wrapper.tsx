import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = (props: React.PropsWithChildren) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;
