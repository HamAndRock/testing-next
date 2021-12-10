import { TProduct, TProducts } from "~/src/components/Products/types";
import { TFilters, TState } from "./initialState";

export enum TActionTypes {
  SET_DATA = "SET_DATA",
  FILTER = "FILTER",
  LOAD_MORE = "LOAD_MORE",
}

export interface TAction {
  payload: any;
  type: TActionTypes;
}

interface TPriceFilter {
  min: number;
  max: number;
}

export const setData = (data: TState): TAction => ({
  payload: data,
  type: TActionTypes.SET_DATA,
});

export const filterData = <T extends keyof TFilters>(
  filter: T,
  value: TFilters[T]
): TAction => ({
  payload: { filter, value },
  type: TActionTypes.FILTER,
});

export const LoadMore = (): TAction => ({
  payload: {},
  type: TActionTypes.LOAD_MORE,
});
