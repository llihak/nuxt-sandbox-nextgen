/* eslint-env jest */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueCurrencyFilter from "vue-currency-filter";

import Component from "../pages/index.vue";

describe("test Component", () => {
  it("vue-currency-filter should working correctly", () => {
    const localVue = createLocalVue();
    localVue.use(VueCurrencyFilter, {
      symbol: "$",
      thousandsSeparator: ",",
      fractionCount: 2,
      fractionSeparator: ".",
      symbolPosition: "front",
      symbolSpacing: true
    });

    const wrapper = shallowMount(Component, {
      localVue
    });

    const result = wrapper.find(".curr");
    expect(result.text()).toEqual("$ 1,000.00");
  });
});
