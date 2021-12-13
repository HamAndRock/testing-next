import { TProduct } from "~/src/components/Products/types";

export interface TFilters {
  vehicleType: string;
  instantBookable: boolean;
  priceFrom: number;
  priceTo: number;
}

export interface TData {
  count: number;
  items: TProduct[];
}

export interface TState extends TData {
  filteredItems: TProduct[];
  filters: TFilters;
  itemsPerPage: number;
  currentPage: number;
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
  itemsPerPage: 6,
  currentPage: 1,
};

export { initialState };
