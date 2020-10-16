import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({ user }) => {
  return (
    <div className={styles.header}>
      <div className={styles.user}>
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default Header;
