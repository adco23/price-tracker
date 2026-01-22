export interface Product {
  id: number;
  title: string;
  description?: string;
  prices?: ProductPrice[];
}

export interface ProductPrice {
  date: string;
  value: number;
  store?: string;
  packaging: Packaging;
  brand?: string;
}

interface Packaging {
  quantity: number;
  unit: string;
}

export interface Brand {
  id: number;
  name: string;
}

