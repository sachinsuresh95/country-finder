import tw, { styled } from "twin.macro";
import { ReactComponent as LoadingAnimation } from "../assets/loader.svg";

const Loader = styled.div`
  ${tw`absolute top-0 left-0 right-0 bottom-0 h-screen w-screen opacity-50 bg-secondary flex flex-col justify-center items-center`};
`;
const Loading = () => {
  return (
    <Loader>
      <LoadingAnimation />
    </Loader>
  );
};

export default Loading;
