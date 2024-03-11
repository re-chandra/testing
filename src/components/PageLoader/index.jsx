import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const RootContainer = styled("div")`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
  background: #000;
`;

const LoaderImage = styled("img")`
  width: 200px;
  max-width: 100%;
  margin: auto;
`;

export default function PageLoader() {
  return (
    <RootContainer>
      <Box width={200}>
        <LoaderImage src="/images/logo.svg" alt="loader" />
      </Box>
    </RootContainer>
  );
}
