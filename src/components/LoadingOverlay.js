import React from "react";
import styles from "../styles/LoadingOverlay.module.css";

const LoadingOverlay = ({ text }) => {
  return (
    <div className={styles.loadingOverlayContainer}>
      <div className={styles.loadingOverlaySpinner}></div>
      <div className={styles.loadingOverlayText}>{text}</div>
    </div>
  );
};

export default LoadingOverlay;
