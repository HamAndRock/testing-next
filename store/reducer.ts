import React from "react";

import { TAction, TActionTypes } from "./actions";
import { TState } from "./initialState";

const reducer: React.Reducer<TState, TAction> = (state, { payload, type }) => {
  const actions = {
    [TActionTypes.SET_DATA]: (): TState => {
      return {
        ...state,
        ...payload,
      };
    },

    [TActionTypes.FILTER_BY_PRICE]: (): TState => {
      console.log("price sort");

      return {
        ...state,
      };
    },

    [TActionTypes.FILTER_BY_TYPE]: (): TState => {
      console.log("type sort");
      return {
        ...state,
      };
    },

    [TActionTypes.FILTER_BY_BOOKING]: (): TState => {
      console.log("booking sort");
      return {
        ...state,
      };
    },

    [TActionTypes.LOAD_MORE]: (): TState => {
      console.log("load more");
      return {
        ...state,
      };
    },

    DEFAULT: (): TState => {
      return state;
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
