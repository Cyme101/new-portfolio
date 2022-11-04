import styled from "styled-components";

const Box = styled.div`
  align-items: center;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Loading = () => {
  return (
    <Box>
      <h1>Loading...</h1>
    </Box>
  );
};

export default Loading;
