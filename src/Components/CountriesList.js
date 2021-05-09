import { useEffect } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";
import { debounce } from "react-debounce-render";
import compose from "@ramda/compose";
import "twin.macro";
import withCountries from "../utils/hoc/withCountries";
import CountryCard from "./CountryCard";
import CardContainer from "./CardContainer";
import Loading from "./Loading";

const CountriesList = ({ countries, filterKey = "" }) => {
  const { list, loading } = countries;
  const listToDisplay = list.filter((country) =>
    country.name.toLowerCase().includes(filterKey.toLowerCase())
  );

  useEffect(() => {
    forceCheck();
  }, [filterKey]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardContainer>
          {listToDisplay.length ? (
            listToDisplay.map((country) => (
              <LazyLoad height={400} key={country.name}>
                <CountryCard country={country} />
              </LazyLoad>
            ))
          ) : (
            <div tw="px-4">No Results</div>
          )}
        </CardContainer>
      )}
    </>
  );
};

export default compose(withCountries, debounce(500))(CountriesList);
