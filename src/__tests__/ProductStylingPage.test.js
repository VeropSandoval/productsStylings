import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { products } from "../../tools/mockData";
import ProductStylingPage from "../components/ProductStylingPage";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ products: [] });
const defaultProductId = "04369248800-V2020";

function renderDefault(args) {
  return mount(
    <Provider store={store}>
      <ProductStylingPage defaultProductId={defaultProductId} />
    </Provider>
  );
}

function render(args) {
  return mount(
    <Provider store={store}>
      <ProductStylingPage />
    </Provider>
  );
}

it("doesn't load default product", () => {
  const wrapper = render();
  const list = wrapper.find("#productStylingsList");
  expect(list.children().exists()).toEqual(false);
});

it("load default product", () => {
  const wrapper = renderDefault();
  const list = wrapper.find("#productStylingsList");
  expect(list.children().exists()).toEqual(true);
});

it("shows stylings from existing product search", () => {
  const wrapper = render();
  wrapper
    .find("#productStylingSearchInput")
    .instance().value = defaultProductId;
  wrapper.find("form").simulate("submit");
  expect(wrapper.contains(".productStylingList"));
});

it("search non existing product", () => {
  const wrapper = render();
  wrapper.find("#productStylingSearchInput").instance().value = "asdfasdf";
  wrapper.find("form").simulate("submit");
  expect(wrapper.contains(".productStylingList")).toEqual(false);
});
