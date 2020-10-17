import React, { useState, useEffect } from "react";
import ProductStyling from "./ProductStyling";
import LoadingOverlay from "./LoadingOverlay";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProductIds, saveProduct } from "../redux/actions/productActions";
import styles from "../styles/ProductStylingPage.module.css";

const ProductStylingPage = ({
  products,
  loadProductIds,
  saveProduct,
  ...props
}) => {
  const defaultProductId = props.defaultProductId || "";
  const defaultProductList = props.defaultProductId
    ? [props.defaultProductId]
    : [];
  const hasDefaultProductId = props.defaultProductId ? true : false;
  const [productInput, setProductInput] = useState(defaultProductId);
  const [productList, setProductList] = useState(defaultProductList);
  const [stylesCount, setStyleCount] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [isLoading, setIsLoading] = useState(hasDefaultProductId);

  useEffect(() => {
    if (productList.length > 0) {
      setIsLoading(true);
      loadProductIds(productList).catch((error) => alert(error));
    }
  }, [productList]);

  useEffect(() => {
    setIsHiding(false);
    setIsLoading(hasLoadSearch());
    const count = products.reduce((total, current) => {
      total += current.styles.length;
      return total;
    }, 0);
    setStyleCount(count);
  }, [products]);

  function hasLoadSearch() {
    const hasProducts = products.length === 0;
    const hasDefaultSearch = productInput && defaultProductId === productInput;
    return hasProducts && hasDefaultSearch;
  }
  function handleChange(event) {
    const newInput = event.target.value;
    setProductInput(newInput);
  }

  function handleSave(item) {
    //saving....
    setIsHiding(true);
    saveProduct(item).catch((error) => alert(error));
  }

  function search(event) {
    //prevent from redirect
    event.preventDefault();
    setIsLoading(true);
    //Find unique product identifiers
    const prods = [...new Set(productInput.split(/\s*,\s*/))];
    //Fetch products
    setProductList(prods);
    //Set product identifiers to show results
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <form onSubmit={search} id="productStylingSearchForm">
          <div className={styles.searchIconContainer}>
            <button
              type="submit"
              name="search"
              className={styles.searchIcon}
            ></button>
          </div>
          <div className={styles.searchFieldContainer}>
            <label>
              <span className={styles.searchFieldLabel}>
                products identifiers
              </span>
              <input
                name="productIds"
                type="text"
                onChange={handleChange}
                value={productInput}
                className={styles.searchInputField}
                id="productStylingSearchInput"
              />
            </label>
          </div>
        </form>
        {stylesCount > 0 && (
          <div className={styles.stylesCount}>{stylesCount} Styles</div>
        )}
      </div>
      <div className={styles.productStylingContainer}>
        {(isLoading || !isHiding) && (
          <ul id="productStylingsList">
            {productList.map((id, index) => (
              <li key={index}>
                <ProductStyling
                  isLoading={isLoading}
                  productId={id}
                  product={products.find((item) => item.id === id)}
                  onSaveProduct={handleSave}
                />
              </li>
            ))}
          </ul>
        )}
        {isHiding && <LoadingOverlay text="We're hiding styles" />}
        {isLoading && <LoadingOverlay text="Loading styles" />}
      </div>
    </div>
  );
};

ProductStylingPage.propTypes = {
  products: PropTypes.array.isRequired,
  loadProductIds: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  loadProductIds,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductStylingPage);
