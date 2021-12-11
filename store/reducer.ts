import React from "react";

import { TAction, TActionTypes } from "./actions";
import { TState } from "./initialState";

const reducer: React.Reducer<TState, TAction> = (state, { payload, type }) => {
  const actions = {
    [TActionTypes.SET_DATA]: (): TState => {
      return {
        ...state,
        ...payload,
        filteredItems: payload.items,
      };
    },

    [TActionTypes.FILTER]: (): TState => {
      const { filters, items, itemsPerPage, currentPage } = state;
      // 1. Setup filter
      state.filters[payload.filter] = payload.value;

      // 2. Filter data
      const filteredItems = !!filters["vehicleType"]
        ? items.filter(
            (item) =>
              item["vehicleType"] === filters["vehicleType"] &&
              item["instantBookable"] === filters["instantBookable"] &&
              item["price"] >= filters["priceFrom"] &&
              item["price"] <= filters["priceTo"]
          )
        : items.filter(
            (item) =>
              item["instantBookable"] === filters["instantBookable"] &&
              item["price"] >= filters["priceFrom"] &&
              item["price"] <= filters["priceTo"]
          );

      return {
        ...state,
        filteredItems,
        currentPage: filteredItems.length >= itemsPerPage ? currentPage : 1,
        // currentPage: 1,
      };
    },

    [TActionTypes.LOAD_MORE]: (): TState => {
      const { currentPage } = state;

      return {
        ...state,
        currentPage: currentPage + 1,
      };
    },

    DEFAULT: (): TState => {
      return state;
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
