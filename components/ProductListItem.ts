import React from "react";
import { Product } from "../types/product";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <div>
      // <h2>{product.name}</h2>
      // <p>{product.price}</p>
      // <p>{product.description}</p>
    </div>
  );
};

export default ProductListItem;