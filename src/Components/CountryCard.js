import tw, { styled, theme } from "twin.macro";
import { abbreviateNumber } from "../utils/helpers";
import CurrencyConverter from "./CurrencyConverter";

const CountryInfo = styled.div`
  box-shadow: 0 0 3px 3px ${theme`colors.borders`};
  ${tw`h-full p-4 rounded flex flex-col font-bold bg-secondary`};
  h3 {
    ${tw`text-xl text-primary`};
  }
`;

const ImgWrapper = styled.div`
  ${tw`h-full w-auto flex flex-col justify-center`};
`;

const Wrapper = styled.div`
  ${tw`h-full`};
`;

const Flag = styled.img`
  ${tw`object-cover`}
`;

const CountryCard = ({ country }) => {
  const { name, capital, population, flag, currencies } = country;
  const { code: currencyCode, name: currencyName } = currencies[0];
  return (
    <Wrapper>
      <CountryInfo>
        <h3>{name}</h3>
        <ImgWrapper>
          <Flag src={flag} alt={`${name} flag`} />
        </ImgWrapper>
        <h4>Capital: {capital}</h4>
        <h4>Population: {abbreviateNumber(population)}</h4>
        {currencyCode && currencyCode !== "SEK" && (
          <CurrencyConverter
            from={"SEK"}
            to={currencyCode}
            toName={currencyName}
          />
        )}
      </CountryInfo>
    </Wrapper>
  );
};

export default CountryCard;
