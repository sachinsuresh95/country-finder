import tw, { styled } from "twin.macro";

const StyledButton = styled.button`
  ${tw`rounded bg-primary text-secondary font-bold text-sm px-4 py-2 border-borders hover:bg-opacity-80`};
`;

const ButtonWrapper = styled.div`
  ${tw`p-1`};
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClick} {...props}>
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
