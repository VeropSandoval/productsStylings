import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

export function loadProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function updateProductSuccess(product) {
  return { type: types.UPDATE_PRODUCT_SUCCESS, product };
}

export function loadProducts() {
  return function (dispatch) {
    return productApi
      .getProducts()
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadProductIds(productIds) {
  return function (dispatch) {
    return productApi
      .getProductIds(productIds)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveProduct(product) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return productApi
      .saveProduct(product)
      .then((savedProduct) => dispatch(updateProductSuccess(savedProduct)))
      .catch((error) => {
        throw error;
      });
  };
}
