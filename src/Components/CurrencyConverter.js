import { useState, useContext } from "react";
import tw, { styled } from "twin.macro";
import ApiContext from "../utils/context/ApiContext";
import { useCurrencyConversion } from "../utils/hooks/useCurrencyConversion";
import Button from "./atoms/Button";
import TextInput from "./atoms/TextInput";

const InputWrapper = styled.div`
  ${tw`flex items-center`}
`;

const CurrencyConverter = ({ from, to, toName }) => {
  const [value, setValue] = useState(0);
  const {convertAccessKey} = useContext(ApiContext);
  const { result, convert } = useCurrencyConversion(from, to, convertAccessKey);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert(value);
      }}
    >
      Convert {from} to {to} :
      <InputWrapper>
        <TextInput
          type="number"
          min="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          width={100}
          style={{ textAlign: "right" }}
        />
        <Button type="submit">Go!</Button>
      </InputWrapper>
      <div>
        &nbsp;:{result} {toName}
      </div>
    </form>
  );
};

export default CurrencyConverter;
