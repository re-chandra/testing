import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Box,
  Container,
  IconButton,
  Grid,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../components/Logo";
import Link from "next/link";
import { styled } from "@mui/system";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DrawerBox = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#000000",
    color:"#fff !important"
  },
  "& .MuiButton-root": {
    padding: "12px 8px",
    color:"#fff",
  },
}));

const MenuButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  color: "#252020",
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0px 10px",
}));

export default function Topbar() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const menuItems = [
    {
      label: "SHOP",
      link: "/",
      userType: true,
    },
    { label: "SKILLS", link: "/", userType: true },
    { label: "STORIES", link: "/", userType: true },
    { label: "ABOUT", link: "/", userType: true },
    { label: "CONTACT US", link: "/", userType: true },
  ];
  const router = useRouter();
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      setState((prevState) => ({
        ...prevState,
        mobileView: window.innerWidth < 1080,
      }));
    };

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
    };
  }, []);

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const renderMenuItems = () => {
    return menuItems.map((menuItem) => (
      <MenuButton
        key={menuItem.label}
        color="inherit"
        // onClick={() => router.push(menuItem.link)}
      >
        {menuItem.label}
      </MenuButton>
    ));
  };

  const femmecubatorLogo = (
    <Box>
      <Link href="/">
        <Logo  />
      </Link>
    </Box>
  );

  const brandLogo = (
    <Box>
      <img src="/images/brand.png" alt="Brand Logo" />
    </Box>
  );

  const displayMobile = () => {
    return (
      <Toolbar>
        <Hidden xsDown>
          <DrawerBox
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            className="drawerBox"
            style={{
              width: "260px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 0px 20px 20px",
            }}
          >
            {brandLogo}
            {renderMenuItems()}
            <Box mt={1} display="flex" justifyContent="center" alignItems="center">
            <CiSearch style={{ color: "#fff", fontSize: "20px",cursor:"pointer"}} />
            <MdOutlineFavoriteBorder
              style={{ color: "#fff", fontSize: "20px", margin: "0px 12px",cursor:"pointer" }}
            />
            <IoBagCheckOutline
              style={{ color: "#fff", fontSize: "20px", marginRight: "12px",cursor:"pointer" }}
            />
            <FaRegUser style={{ color: "#fff", fontSize: "20px",cursor:"pointer" }} />
          </Box>
          </DrawerBox>
        </Hidden>
        <Box
          className="topbarmainBox"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "9px 0px",
            width: "100%",
          }}
        >
          <div>{brandLogo}</div>
          <div>{femmecubatorLogo}</div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            style={{ background: "none" }}
          >
            <MenuIcon
              style={{ color: "#252020", fontSize: "30px" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    );
  };
  

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg">
        <Toolbar
          className="topbarmainBox"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "9px 0px",
            width: "100%",
          }}
        >
          <Grid container item justifyContent="flex-start" alignItems="center">
            {brandLogo}
          </Grid>
          <Grid container item justifyContent="center" alignItems="center">
            {femmecubatorLogo}
          </Grid>
          <Grid container item justifyContent="flex-end" alignItems="center">
            <CiSearch style={{ color: "#292D32", fontSize: "20px" ,cursor:"pointer"}} />
            <MdOutlineFavoriteBorder
              style={{ color: "#292D32", fontSize: "20px" , margin: "0px 12px",cursor:"pointer"}}
            />
            <IoBagCheckOutline
              style={{ color: "#292D32", fontSize: "20px",marginRight:"12px",cursor:"pointer" }}
            />
            <FaRegUser style={{ color: "#292D32", fontSize: "20px",cursor:"pointer" }} />
          </Grid>
        </Toolbar>
        <Toolbar style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          {renderMenuItems()}
        </Toolbar>
      </Container>
    );
  };

  return (
    <AppBar
      elevation={0}
      style={{
        background: "#fff",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <Box>{mobileView ? displayMobile() : displayDesktop()}</Box>
    </AppBar>
  );
}
