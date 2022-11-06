import styled from "styled-components";
import PowerButton from "./PowerButton";

const Box = styled.div`
  background: inherit;
  height: 5rem;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const TopNav = () => {
  return (
    <Box>
      <PowerButton />
    </Box>
  );
};

export default TopNav;
