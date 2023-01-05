import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import HeroImg from "../assests/heroImg.png";
import styled from "@emotion/styled";

const MyBtn = styled(Button)(({ theme }) => ({
  color: "#26643b",
  fontSize: "16px",
  fontFamily: "Raleway",
  fontWeight: 700,
  padding: "0.5rem",
  textDecoration: "none",
  margin: "0px 1rem",
}));

const BookTable = styled(Button)({
  backgroundColor: "#26643B",
  color: "#e8e8e8",
  fontSize: "16px",
  fontWeight: 700,
  padding: "8px 20px",
  borderRadius: "10px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#26643b",
  },
});
const Text = styled(Typography)(({ theme }) => ({
  color: "#3f3c3c",
  fontSize: "2.8rem",
  fontWeight: "500",
  fontFamily: "Poppins",
  [theme.breakpoints.down("md")]: {
    textAlign: theme.center,
  },
}));
const HeroSection = () => {
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
            <Text>The flavor of tradition</Text>
            <Typography>
              We are a multi-cuisine restaurant offering a wide variety of food
              experience in both casual and fine dining environment.{" "}
            </Typography>

            <Box mt="1rem">
              <BookTable>Explore Menu</BookTable>
              <MyBtn>Book Table</MyBtn>
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
