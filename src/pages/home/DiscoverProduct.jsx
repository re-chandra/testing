import ProductCard from "@/components/ProductCard";
import { productDataList } from "@/data";
import HomeLayout from "@/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Checkbox,
  Paper,
  Divider,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const BannerBox = styled("div")(({ theme }) => ({
  padding: "150px 0px 100px",
  "@media(max-width:1079px)": {
    padding: "80px 0px 80px",
  },
  "& h5": {
    fontWeight: "700",
  },
  "& .topText": {
    padding: "35px 0px 60px",
    "@media(max-width:767px)": {
      padding: "20px 0px 40px",
    },
    "& h1": {
      fontSize: "60px",
      fontWeight: "400",
      marginBottom: "20px",
    },
    "& h3": {
      fontSize: "22px",
      fontWeight: "400",
      width: "100%",
      maxWidth: "790px",
      margin: "0 auto",
      lineHeight: "40px",
      "@media(max-width:767px)": {
        lineHeight: "34px",
      },
    },
  },
  "& .borderBox": {
    borderTop: "1px solid #E5E5E5",
    borderBottom: "1px solid #E5E5E5",
    padding: "30px 0px",
  },
  "& .productBox": {
    marginTop: "10px",
  },
  "& .AccordionBox": {
    borderBottom: "1px solid #E5E5E5",
    padding: "16px 0px 20px",
    [theme.breakpoints.down("sm")]: {
      padding:"8px 0px 10px",
    },
  },
  "& .flexBox": {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  "& .order3Box": {
    [theme.breakpoints.down("sm")]: {
      order: 3,
    },
    "& h6": {
      textDecoration: "underline",
      marginLeft: "8px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
    },
  },
}));
const AccordionSection = ({ title, options }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleToggleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options.map((option) => option.value));
    }
  };

  const handleCheckboxChange = (value) => {
    const currentIndex = selectedOptions.indexOf(value);
    const newSelectedOptions = [...selectedOptions];

    if (currentIndex === -1) {
      newSelectedOptions.push(value);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <Box className="AccordionBox">
      <Box className="displaySpaceBetween">
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <div onClick={handleExpand} style={{ cursor: "pointer" }}>
          {expanded ? (
            <MdKeyboardArrowUp
              style={{ color: "rgb(136, 135, 146)", fontSize: "22px" }}
            />
          ) : (
            <MdKeyboardArrowDown
              style={{ color: "rgb(136, 135, 146)", fontSize: "22px" }}
            />
          )}
        </div>
      </Box>
      {expanded && (
        <>
          <Typography
            variant="h5"
            color="primary"
            style={{ fontWeight: "400", cursor: "pointer" }}
            onClick={handleToggleSelectAll}
          >
            {selectedOptions.length === options.length
              ? "Unselect all"
              : "Select all"}
          </Typography>
          <Box mt={2}>
            {options.map((option) => (
              <Box key={option.value} className="displayAlign" mb={2}>
                <Checkbox
                  name={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                  style={{ padding: "0px", marginRight: "5px" }}
                />
                <Typography color="primary" variant="h6">
                  {option.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default function DiscoverProduct() {
  const [showFilter, setShowFilter] = useState(true);

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <BannerBox>
        <Container>
          <Box className="topText">
            <Typography variant="h1" color="primary" align="center">
              DISCOVER OUR PRODUCTS
            </Typography>
            <Typography variant="h3" color="primary" align="center">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </Typography>
          </Box>
          <Box className="borderBox">
            <Grid container spacing={2}>
              <Grid item lg={2} md={2} sm={2} xs={4}>
                <Box className="displayAlign">
                  <Typography variant="h5" color="primary">
                    3425 ITEMS
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12} className="order3Box">
                <Typography
                  variant="h6"
                  color="secondary"
                  onClick={handleToggleFilter}
                >
                  <MdOutlineKeyboardArrowLeft
                    style={{
                      cursor: "pointer",
                      color: "#888792",
                      fontSize: "20px",
                    }}
                  />
                  {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
                </Typography>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={8} className="flexBox">
                <Box className="displayAlign">
                  <Typography
                    variant="h5"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                    RECOMMENDED
                  </Typography>
                  <MdOutlineKeyboardArrowDown
                    style={{
                      cursor: "pointer",
                      color: "#888792",
                      fontSize: "22px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="productBox">
            <Grid container spacing={1}>
              {showFilter && (
                <Grid item lg={3} md={3} sm={3} xs={12}>
                  <Box sx={{ height: "calc(100vh - 134px)", overflow: "auto" }}>
                    <AccordionSection
                      title="IDEAL FOR"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="OCCASION"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="WORK"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="FABRIC"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="SEGMENT"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="SUITABLE FOR"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="RAW MATERIALS"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                    <AccordionSection
                      title="PATTERN"
                      options={[
                        { label: "Men", value: "men" },
                        { label: "Women", value: "women" },
                        { label: "Baby & Kids", value: "baby_kids" },
                      ]}
                    />
                  </Box>
                </Grid>
              )}

              <Grid
                item
                lg={showFilter ? 9 : 12}
                md={showFilter ? 9 : 12}
                sm={showFilter ? 9 : 12}
                xs={12}
              >
                <Grid container spacing={2}>
                  {productDataList &&
                    productDataList.map((data, i) => (
                      <Grid
                        item
                        lg={showFilter ? 4 : 3}
                        md={showFilter ? 4 : 3}
                        sm={showFilter ? 6 : 4}
                        xs={12}
                        key={i}
                      >
                        <ProductCard data={data} index={i} />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </BannerBox>
    </>
  );
}

DiscoverProduct.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
