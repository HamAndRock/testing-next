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
      const stateFilters = { ...filters };

      // 1. Setup filter
      stateFilters[payload.filter] = payload.value;

      // 2. Filter data
      const filteredItems = !!stateFilters["vehicleType"]
        ? items.filter(
            (item) =>
              item["vehicleType"] === stateFilters["vehicleType"] &&
              item["instantBookable"] === stateFilters["instantBookable"] &&
              item["price"] >= stateFilters["priceFrom"] &&
              item["price"] <= stateFilters["priceTo"]
          )
        : items.filter(
            (item) =>
              item["instantBookable"] === stateFilters["instantBookable"] &&
              item["price"] >= stateFilters["priceFrom"] &&
              item["price"] <= stateFilters["priceTo"]
          );

      return {
        ...state,
        filteredItems,
        filters: stateFilters,
        currentPage: filteredItems.length >= itemsPerPage ? currentPage : 1,
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
