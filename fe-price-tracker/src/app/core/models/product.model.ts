export interface Product {
  id: number;
  title: string;
  brand?: string;
  description?: string;
  prices?: ProductPrice[];
}

export interface ProductPrice {
  place?: Place;
  price: number;
  date: string;
}

export interface Place {
  name: string
}
