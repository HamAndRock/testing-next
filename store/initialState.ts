import { TProduct } from "~/src/components/Products/types";

export interface TState {
  count: number;
  items: TProduct[];
}

const initialState: TState = {
  count: 0,
  items: [],
};

export { initialState };
