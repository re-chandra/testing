import { styled } from "@mui/system";
import React, { useState } from "react";
import { Box, Typography, Container, Grid, Avatar } from "@mui/material";

export const CareMainBoxInfluencer = styled(Box)(({ theme }) => ({
    backgroundColor: "#150D40",
    padding: "45px 0 70px",
  }));
  
  export const InfluencerBox = styled(Box)(({ theme }) => ({
    "& h6": {
      maxWidth: "915px",
      margin: "0 auto",
      color: "#B8C3FF",
      padding: "10px 0px 50px",
    },
  }));
  export const LastBoxInfluencer = styled(Box)(({ theme }) => ({
    background: theme.palette.background.main,
    padding: "80px 0px 50px",
  }));
  
  export const InfluenceHead = styled(Box)(({ theme }) => ({
    backgroundColor: "rgba(43, 41, 89, 1)",
    padding: "0px 0px 20px",
    borderRadius: "5px",
    "& h5": {
      fontWeight: "600",
    },
  }));
  
  export const MainBoxInfluencer = styled(Box)(({ theme }) => ({
    height: "100%",
    minHeight: "258px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }));