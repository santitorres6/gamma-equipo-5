import { createContext, useMemo } from "react";
import { homePage } from "../data/homePage";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const providerValue = useMemo(
    () => ({
      homePage,
    }),
    [homePage]
  );

  return (
    <DataContext.Provider value={providerValue}>
      {props.children}
    </DataContext.Provider>
  );
};
