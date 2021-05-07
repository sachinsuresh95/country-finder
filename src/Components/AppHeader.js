import tw, { styled } from "twin.macro";

const StyledHeaderContainer = styled.div`
  ${tw`bg-primary text-secondary`}
`;
const AppHeader = ({ children }) => {
  return <StyledHeaderContainer>{children}</StyledHeaderContainer>;
};

export default AppHeader;
