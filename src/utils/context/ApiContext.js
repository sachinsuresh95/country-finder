import { createContext } from "react";
import { CURRENCY_CONVERT_ENDPOINT, COUNTRIES_ENDPOINT } from "../../constants";

const value = {
  convertEndpoint: CURRENCY_CONVERT_ENDPOINT,
  convertAccessKey: process.env.REACT_APP_CURRENCY_CONVERT_ACCESS_KEY,
  countriesEndpoint: COUNTRIES_ENDPOINT,
};

const ApiContext = createContext(value);

export const ApiContextProvider = ({ children }) => {
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiContext;
