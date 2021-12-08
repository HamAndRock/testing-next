import { TProducts } from "~/src/components/Products/types";
import { TState } from "./initialState";

export enum TActionTypes {
  SET_DATA = "SET_DATA",
  FILTER_BY_PRICE = "FILTER_BY_PRICE",
  FILTER_BY_TYPE = "FILTER_BY_TYPE",
  FILTER_BY_BOOKING = "FILTER_BY_BOOKING",
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

export const filterByPrice = ({ min, max }: TPriceFilter): TAction => ({
  payload: { min, max },
  type: TActionTypes.FILTER_BY_PRICE,
});

export const filterByType = (option: string): TAction => ({
  payload: option,
  type: TActionTypes.FILTER_BY_TYPE,
});

export const filterByBooking = (booking: boolean): TAction => ({
  payload: booking,
  type: TActionTypes.FILTER_BY_BOOKING,
});

export const LoadMore = (): TAction => ({
  payload: {},
  type: TActionTypes.LOAD_MORE,
});
