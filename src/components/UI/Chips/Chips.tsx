import classnames from "classnames";
import React from "react";
import styles from "./Chips.module.css";

export enum ChipType {
  done,
  undone,
}

interface IChipsProps {
  type?: ChipType;
}

const Chips = (props: React.PropsWithChildren<IChipsProps>) => {
  return (
    <div
      className={classnames(
        styles.chip,
        props.type === ChipType.done ? styles.done : styles.undone
      )}
    >
      {props.children}
    </div>
  );
};

export default Chips;
