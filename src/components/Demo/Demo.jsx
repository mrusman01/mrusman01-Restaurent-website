import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { TextPrice, Text, BookTable } from "../Header/StyledComp";

import food5 from "../assests/food-5.png";
import food3 from "../assests/food-3.png";
import food4 from "../assests/food-4.png";
import Star from "../assests/3star.png";
import Illustration from "../assests/discount-illustration.png";
import EventsMedia1 from "../assests/eventsMedia1.png";
import EventsMedia2 from "../assests/eventsMedia2.png";
import PlayIcon from "../assests/playIcon.svg";

const Demo = () => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          borderRadius="12px"
          p="1rem"
          backgroundColor="#D6E5D8"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={2.5}>
            <img
              src={food5}
              alt=""
              style={{
                borderRadius: "12px",
                width: !matchesMeida ? "90%" : "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <img
              src={food3}
              alt=""
              style={{
                borderRadius: "12px",
                width: !matchesMeida ? "90%" : "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <img
              src={food4}
              alt=""
              style={{
                borderRadius: "12px",
                width: !matchesMeida ? "90%" : "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <TextPrice fontSize="36px">20% OFF</TextPrice>
            <Text fontSize="26px" fontWeight="700">
              Demo Dish For Discount
            </Text>{" "}
            <TextPrice fontSize="26px" fontWeight="700">
              <s style={{ color: "#000" }}>$45</s> $35
            </TextPrice>
            <Box my="10px">
              <img src={Star} alt="" />
            </Box>
            <BookTable>Book Table</BookTable>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box
              width="90%"
              display={{ xs: "none", md: "flex" }}
              alignItems="flex-end"
              justifyContent="center"
              marginTop="150px"
              ml="31px"
              mb="-12px"
              position="relative"
            >
              <img src={Illustration} alt="" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
