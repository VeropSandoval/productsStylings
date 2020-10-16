import React from "react";
import styles from "../styles/StylingCardData.module.css";

const StylingCardData = ({ text, value }) => {
  return (
    <div className={styles.cardDataContainer}>
      <div className={styles.cardDataValue}>{value}</div>
      <div className={styles.cardDataText}>{text}</div>
    </div>
  );
};

export default StylingCardData;
