import { useState, useContext } from "react";
import ApiContext from "../context/ApiContext";
import { get } from "../api";

export const useCurrencyConversion = (from, to) => {
  const { convertEndpoint: endpoint, convertAccessKey: accessKey } = useContext(
    ApiContext
  );
  const [result, setResult] = useState(0);
  const queryParams = {
    q: `${from}_${to}`,
    apiKey: accessKey,
  };
  const convert = (value) => {
    get(
      `${endpoint}?${new URLSearchParams(queryParams).toString()}`
    ).then(({ results }) =>
      setResult((value * results[`${from}_${to}`].val).toFixed(2))
    );
  };

  return {
    result,
    convert,
  };
};
