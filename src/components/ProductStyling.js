import React from "react";
import StylingList from "./StylingList";
import PropTypes from "prop-types";
import StylingError from "./StylingError";
import styles from "../styles/ProductStyling.module.css";

const ProductStyling = ({ productId, product, onSaveProduct, isLoading }) => {
  function handleSave(stylingsList) {
    const newStylings = getNewStylings(product.styles, stylingsList);
    const newProduct = { ...product, styles: newStylings };
    onSaveProduct(newProduct);
  }

  function getNewStylings(oldList, newList) {
    return oldList.reduce((total, current) => {
      const invisibleStyling = newList.find((item) => item.id === current.id);
      total.push(invisibleStyling ? invisibleStyling : current);
      return total;
    }, []);
  }

  return (
    !isLoading && (
      <div>
        <div className={styles.productStylingTitle}>{productId}</div>
        <div>
          {product && (
            <StylingList stylings={product.styles} onSave={handleSave} />
          )}
          {!product && <StylingError error="Product not found" />}
        </div>
      </div>
    )
  );
};

ProductStyling.propTypes = {
  product: PropTypes.object,
};

export default ProductStyling;
