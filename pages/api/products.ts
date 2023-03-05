// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { readFileSync } from "fs";

interface ProductData {
  name: string;
  price: number;
  description: string;
}

interface Product extends ProductData {
  id: string;
}

interface ProductList {
  items: ProductData[];
}

const data: ProductList = JSON.parse(
  readFileSync("./pages/api/data/products.json", "utf-8")
);

const products: Product[] = data.items.map((item, index) => ({
  id: index.toString(),
  ...item,
}));


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const { prodID } = req.query;
  const product = products[Number(prodID)];
  if (!product) {
    res.status(404).end(`Product with ID ${prodID} not found`);
    return;
  }
  res.status(200).json(product);
}
