import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../data/shop-data.json";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shopData, setShopData] = useState(SHOP_DATA);

  const value = { shopData, setShopData };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
