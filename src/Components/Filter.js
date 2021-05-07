import { useState } from "react";
import tw, { styled } from "twin.macro";
import TextInput from "./atoms/TextInput";

const FilterWrapper = styled.div`
  ${tw`p-4 w-full md:w-1/2 lg:w-1/4`}
`;

const CountryFilter = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <>
      <FilterWrapper>
        <TextInput
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
          placeholder="Search countries"
        />
      </FilterWrapper>
      {children(searchKey)}
    </>
  );
};

export default CountryFilter;
