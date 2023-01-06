import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import HeroImg from "../assests/heroImg.png";
import { Title, BookTable, MyBtn } from "./StyledComp";

const HeroSection = () => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          my="6rem"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Title>The flavor of tradition</Title>
            <Typography textAlign={{ xs: "center", md: "left" }}>
              We are a multi-cuisine restaurant offering a wide variety of food
              experience in both casual and fine dining environment.{" "}
            </Typography>

            <Box
              mt="1rem"
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <BookTable>Explore Menu</BookTable>
              <MyBtn mt={{ xs: "0px", md: "1rem" }}>Book Table</MyBtn>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={HeroImg} alt="" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
