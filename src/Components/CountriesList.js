import { useEffect } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";
import { debounce } from "react-debounce-render";
import compose from "@ramda/compose";
import withCountries from "../utils/hoc/withCountries";
import CountryCard from "./CountryCard";
import CardContainer from "./CardContainer";
import Loading from "./Loading";

const CountriesList = ({ countries, filterKey = "" }) => {
  const { list, loading } = countries;

  useEffect(() => {
    console.log({ filterKey });
    forceCheck();
  }, [filterKey]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardContainer>
          {list
            .filter((country) =>
              country.name.toLowerCase().includes(filterKey.toLowerCase())
            )
            .map((country) => (
              <LazyLoad height={400} key={country.name}>
                <CountryCard country={country} />
              </LazyLoad>
            ))}
        </CardContainer>
      )}
    </>
  );
};

export default compose(withCountries, debounce(1000))(CountriesList);
