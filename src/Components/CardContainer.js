import tw, { styled } from "twin.macro";

const CardContainer = styled.div`
  ${tw`flex flex-wrap`};
  .lazyload-wrapper {
    ${tw`w-full md:w-1/2 lg:w-1/4 box-border p-4`};
  }
`;

export default CardContainer;
