import tw, { styled } from "twin.macro";

const TextInput = styled.input`
  ${tw`border border-primary rounded h-8 px-2`}
  width: ${({ width }) => (width ? `${width}px` : "100%")};

  /* Chrome, Safari, Edge, Opera - to hide spinner/arrow from number input */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default TextInput;
