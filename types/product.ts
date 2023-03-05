export interface ProductData {
  name: string;
  price: number;
  description: string;
}

export interface Product extends ProductData {
  id: string;
}