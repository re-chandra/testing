import Footer from "./Footer";
import React from "react";
import Topbar from "./Topbar";
import { styled } from "@mui/material/styles";
const RootBox = styled("div")(({ theme }) => ({
  background: "#FFFFFF",
  backgroundSize: "cover",
  backgroundColor: "#FFFFFF",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  
}));
const MainLayout = styled("div")(({ theme }) => ({
  minHeight: "calc(100vh - 120px)",

}));
export default function HomeLayout({ children }) {
  return (
    <RootBox>
    <React.Fragment>
      <Topbar />
      <MainLayout>{children}</MainLayout>

      <Footer />
    </React.Fragment>
    </RootBox>

  );
}
