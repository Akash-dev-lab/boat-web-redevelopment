import { createContext, useContext, useState } from 'react';
import products from '../data/products';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(products);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);