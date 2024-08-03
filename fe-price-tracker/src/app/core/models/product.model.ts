export interface Product {
  title: string
  priceList?: ProductPrice[];
}

export interface ProductPrice {
  place: string;
  price: number;
  date: string;
}
