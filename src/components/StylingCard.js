import React, { useState } from "react";
import StylingCardData from "./StylingCardData";
import styles from "../styles/StylingCard.module.css";

const StylingCard = ({ style, toggleStyle }) => {
  const [styleCard, setStyleCard] = useState(style);
  function handleChange() {
    const newStyle = { ...styleCard, visible: !styleCard.visible };
    setStyleCard(newStyle);
    return toggleStyle(newStyle);
  }

  return (
    <div className={styles.stylingCard}>
      <div className={styles.stylingImageContainer}>
        <img src={style.images[0].url} width="100%" alt="" />
        <div className={styles.stylingImageOverlay}></div>
      </div>
      <input
        type="checkbox"
        onChange={handleChange}
        disabled={!style.visible}
        className={styles.stylingCardCheck}
        id={"check_" + style.id}
      />
      <div className={styles.stylingInfo}>
        <StylingCardData text="Sales" value={style.sales + "€"} />
        <StylingCardData text="Visits" value={style.visits} />
        <StylingCardData text="Conv Ratio" value={style.CTR + "%"} />
        <StylingCardData text="Turnover" value={style.turnover} />
        {!style.visible && <div className={styles.notVisible}>NOT VISIBLE</div>}
      </div>
      <div className={styles.stylingName}>
        {style.styleCode} - {style.styleName}
      </div>
    </div>
  );
};

export default StylingCard;
