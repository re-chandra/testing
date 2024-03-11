import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const MainComponent = styled("Box")(({ theme }) => ({
  backgroundColor: "#000",
  "& .socialBox": {
    display: "flex",
    alignItems: "center",
    "@media(max-width:575px)": {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  "& .iconBox": {
    margin: "0px 7px",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "25px",
  },
  "& .baseSection": {
    padding: "40px 0px 20px",
    "& a": {
      textDecoration: "none",
      margin: "14px 0px",
      fontSize: "14px",
      fontWeight: "300",
      color: "#fff",
      display: "block",
      "@media(max-width:420px)": {
        fontSize: "12px",
        margin: "5px 0px",
      },
    },
    "@media(max-width:575px)": {
      display: "block",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  "& .topFooter": {
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
    padding: "70px 0px 20px",
  },
  "& .logoBox": {
    maxWidth: "100px",
    "@media(max-width:599px)": {
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
    },
  },
  "& .flexButton": {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    "& .MuiOutlinedInput-input": {
      padding: "13.5px 14px",
    },
  },
  "& .dot": {
    width: "32px",
    height: "32px",
    border: " 1px solid #fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    marginRight: "10px",
  },
  "& .partnerLogo": {
    marginTop:"48px",
    "@media(max-width:575px)": {
      marginTop:"20px",

    },
    "& img": {
      maxWidth: "56px",
      marginRight: "8px",
      marginBottom: "8px",
      "&:last-child": {
        marginRight: "0 !important",
      },
    },
  },
  "& .flexLogo": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media(max-width:575px)": {
      justifyContent: "center",
    },
  },
}));
const imageSlider = [
  {
    images: "/images/brandlogo1.png",
  },
  {
    images: "/images/brandlogo2.png",
  },
  {
    images: "/images/brandlogo3.png",
  },
  {
    images: "/images/brandlogo4.png",
  },
  {
    images: "/images/brandlogo5.png",
  },
  {
    images: "/images/brandlogo6.png",
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const disableLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <MainComponent>
      <Container>
        <Box className="topFooter">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography variant="h4" style={{ color: "#fff" }}>
                BE THE FIRST TO KNOW
              </Typography>
              <Box mt={2}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", fontWeight: "300" }}
                >
                  Sign up for updates from mettā muse.
                </Typography>
              </Box>
              <Box className="flexButton">
                <TextField
                  placeholder="Enter your e-mail..."
                  variant="outlined"
                  fullWidth
                />
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                >
                  SUBSCRIBE
                </Button>
              </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={12}></Grid>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <Box mb={3}>
                <Typography variant="h4" style={{ color: "#fff" }}>
                  CONTACT US
                </Typography>
                <Box mt={1} mb={1}>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontWeight: "300" }}
                  >
                    +44 221 133 5360
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", fontWeight: "300" }}
                >
                  customercare@mettamuse.com
                </Typography>
              </Box>
              <Typography variant="h4" style={{ color: "#fff" }}>
                CURRENCY
              </Typography>
              <Box className="displayAlign" mb={2} mt={2}>
                <img src="/images/usimage.png" alt="" />
                <Typography
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    marginLeft: "10px",
                  }}
                >
                  USD
                </Typography>
              </Box>
              <Typography variant="body2">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box className="baseSection">
          <Grid container spacing={1}>
            <Grid item lg={4} md={4} sm={4} xs={6}>
              <Typography
                variant="h4"
                style={{ color: "#fff", marginBottom: "20px" }}
              >
                mettā muse
              </Typography>
              <Link href="/" onClick={disableLinkClick}>About Us</Link>
              <Link href="/" onClick={disableLinkClick}>Stories</Link>
              <Link href="/" onClick={disableLinkClick}>Artisans</Link>
              <Link href="/" onClick={disableLinkClick}>Boutiques</Link>
              <Link href="/" onClick={disableLinkClick}>Contact Us</Link>
              <Link href="/" onClick={disableLinkClick}>EU Compliances Docs</Link>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={6}>
              <Typography
                variant="h4"
                style={{ color: "#fff", marginBottom: "20px" }}
              >
                QUICK LINKS
              </Typography>
              <Link href="/" onClick={disableLinkClick}>Orders & Shipping</Link>
              <Link href="/" onClick={disableLinkClick}>Join/Login as a Seller</Link>
              <Link href="/" onClick={disableLinkClick}>Payment & Pricing</Link>
              <Link href="/" onClick={disableLinkClick}>Return & Refunds</Link>
              <Link href="/" onClick={disableLinkClick}>FAQs</Link>
              <Link href="/" onClick={disableLinkClick}>Privacy Policy</Link>
              <Link href="/" onClick={disableLinkClick}>Terms & Conditions</Link>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Typography
                variant="h4"
                style={{ color: "#fff", marginBottom: "7px" }}
              >
                Follow Us
              </Typography>
              <Box className="socialBox">
                <Link target="_blank" href="https://www.instagram.com/">
                  <Box className="dot">
                    <FaInstagram className="iconBox" />
                  </Box>
                </Link>

                <Link target="_blank" href="https://www.discord.com/">
                  <Box className="dot">
                    <FaLinkedin className="iconBox" />
                  </Box>
                </Link>
              </Box>
              <Box  className="partnerLogo">
                <Typography variant="h4">mettā muse ACCEPTS</Typography>
                <Box className="flexLogo" mt={2}>
                  {imageSlider.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.images}
                      alt={`Brand Logo ${index + 1}`}
                      width="100%"
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body1" align="center">
          Copyright © {currentYear} mettamuse. All rights reserved.
        </Typography>
      </Container>
    </MainComponent>
  );
};

export default Footer;
