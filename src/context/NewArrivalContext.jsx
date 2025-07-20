import { createContext, useContext } from "react";
import NewArrivals from "../data/NewArrivals";

const NewArrivalContext = createContext();

export const NewArrivalProvider = ({ children }) => {
  return (
    <NewArrivalContext.Provider value={{ NewArrivals }}>
      {children}
    </NewArrivalContext.Provider>
  );
};

export const useNewArrivals = () => useContext(NewArrivalContext);
