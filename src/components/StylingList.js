import React, { useEffect, useState } from "react";
import StylingCard from "./StylingCard.js";
import styles from "../styles/StylingList.module.css";

const StylingList = ({ stylings, onSave }) => {
  const [styleList, setStyleList] = useState([]);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (styleList.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [styleList]);

  function toggleCard(card) {
    let newList;
    if (!card.visible) {
      newList = [...styleList, card];
    } else {
      newList = styleList.filter((item) => item.id !== card.id);
    }
    setStyleList(newList);
  }

  function saveStylings() {
    onSave(styleList);
  }

  return (
    <div className={styles.stylingListContainer}>
      <ul className="productStylingList">
        {stylings.map((styling) => (
          <li key={styling.id}>
            <StylingCard style={styling} toggleStyle={toggleCard} />
          </li>
        ))}
      </ul>
      <div className={styles.saveButtonContainer}>
        {showButton && (
          <button
            id="stylingListSavingButton"
            onClick={saveStylings}
            className={styles.saveButton}
          ></button>
        )}
      </div>
    </div>
  );
};

export default StylingList;
