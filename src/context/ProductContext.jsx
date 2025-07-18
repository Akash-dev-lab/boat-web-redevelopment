import { createContext, useContext } from "react";
import products from "../data/products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
