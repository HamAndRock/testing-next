export interface TProduct {
  instantBookable: boolean;
  location: string;
  name: string;
  passengersCapacity: number;
  pictures: string[];
  price: number;
  shower: boolean;
  sleepCapacity: number;
  toilet: boolean;
  vehicleType: string;
}
export interface TProducts {
  data: {
    count: number;
    items: TProduct[];
  };
}
