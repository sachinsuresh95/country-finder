import { useState, useEffect, useContext } from "react";
import ApiContext from "../context/ApiContext";
import { get } from "../api";

const withCountries = (Component) => {
  const Wrapper = (props) => {
    const [countries, setCountries] = useState({ loading: true, list: [] });
    const { countriesEndpoint } = useContext(ApiContext);
    useEffect(() => {
      get(countriesEndpoint).then(({ data }) =>
        setCountries({ list: data, loading: false })
      );
    }, [countriesEndpoint]);

    return <Component countries={countries} {...props} />;
  };

  return Wrapper;
};

export default withCountries;
