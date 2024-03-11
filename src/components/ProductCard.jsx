import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const ProductCardBox = styled("div")(({ theme }) => ({
  "& .mainimg": {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",
  },
}));

export default function ProductCard(props) {
  const router = useRouter();
  const { data, index } = props;
  const [imageHeight, setImageHeight] = useState(0);
  const [lotteryData, setLotteryData] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const updateImageHeight = () => {
    const cardWidth = document.getElementById(`imagecard${index}`).offsetWidth;
    let newImageHeight = cardWidth - 4;
    if (newImageHeight < 399) {
      newImageHeight = 399;
    }
    setImageHeight(newImageHeight);
  };

  useEffect(() => {
    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
  }, [index]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ProductCardBox>
      <Box
        id={`imagecard${index}`}
        className="mainimg"
        style={{
          background: `url(${data?.productImage})`,
          height: `${imageHeight}px`,
        }}
      ></Box>

      <Box className="subBox">
        <Box mt={2} mb={1}>
          <Typography
            variant="h5"
            color="primary"
            style={{ fontWeight: "700" }}
          >
            {data.name?.slice(0, 20)}
            {data.name?.length > 20 && "..."}
          </Typography>
        </Box>
        <Box className="displaySpaceBetween">
          <Typography variant="body2" color="secondary">
            {data.subChild}
          </Typography>
          {isFavorite ? (
            <MdOutlineFavorite
              onClick={handleFavoriteToggle}
              style={{
                cursor: "pointer",
                color: "#292D32",
                fontSize: "22px",
                marginLeft: "5px",
              }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              onClick={handleFavoriteToggle}
              style={{
                cursor: "pointer",
                color: "#292D32",
                fontSize: "22px",
                marginLeft: "5px",
              }}
            />
          )}
        </Box>
      </Box>
    </ProductCardBox>
  );
}

