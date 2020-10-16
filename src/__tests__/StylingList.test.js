import React from "react";
import { mount } from "enzyme";
import { products } from "../../tools/mockData";
import StylingList from "../components/StylingList";

function render(args) {
  const defaultProps = {
    stylings: products[0].styles,
    onSave: jest.fn(),
  };

  const props = { ...defaultProps, ...args };

  return mount(<StylingList {...props} />);
}

it("doesn't show button save", () => {
  const wrapper = render();
  expect(wrapper.contains("#stylingListSavingButton")).toEqual(false);
});

it("does show button save", () => {
  const wrapper = render();
  const check = wrapper.find("#check_42113479").first();
  check.simulate("click");
  expect(wrapper.contains("#stylingListSavingButton"));
});
