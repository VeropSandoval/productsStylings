import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/products/";

export function getProducts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getProductIds(ids) {
  const prodIds = ids.reduce((total, current) => {
    total += "&id=" + current;
    return total;
  }, "");
  return fetch(baseUrl + "?" + prodIds.substring(1))
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return fetch(baseUrl + product.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}
