import { TProduct } from "~/src/components/Products/types";

export interface TFilters {
  vehicleType: string;
  instantBookable: boolean;
  priceFrom: number;
  priceTo: number;
}
export interface TState {
  count: number;
  items: TProduct[];
  filteredItems: TProduct[];
  filters: TFilters;
}

const initialState: TState = {
  count: 0,
  items: [],
  filteredItems: [],
  filters: {
    vehicleType: "",
    instantBookable: true,
    priceFrom: 0,
    priceTo: 10000,
  },
};

export { initialState };
