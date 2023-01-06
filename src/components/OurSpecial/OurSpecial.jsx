import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import ClockImg from "../assests/wall-clock-icon.svg";
import PhoneImg from "../assests/phone-icon.svg";
import Address from "../assests/address-icon.svg";
import Food from "../assests/food-3.png";
import Food1 from "../assests/food-1.png";
import Star from "../assests/3star.png";

import {
  Title,
  Text,
  TextPara,
  Title2,
  TextPrice,
  TextSmall,
  BookTable,
} from "../Header/StyledComp";
const OurSpecial = () => {
  return (
    <Box mb="4rem">
      <Container maxWidth="lg">
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          <Grid item xs={12} sm={6} md={2.6}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap="10px"
              py="3rem"
              px="2rem"
              borderRadius="12px"
              backgroundColor="#D6E5D8"
            >
              <img src={ClockImg} alt="" />
              <Text>10 AM - 7 PM </Text>
              <TextPara>Opening Hour</TextPara>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.6}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap="10px"
              py="3rem"
              px="2rem"
              borderRadius="12px"
              backgroundColor="#D6E5D8"
            >
              <img src={Address} alt="" />
              <Text>GEC, Chittagong</Text>
              <TextPara>Address </TextPara>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.6}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap="10px"
              py="3rem"
              px="2rem"
              borderRadius="12px"
              backgroundColor="#D6E5D8"
            >
              <img src={PhoneImg} alt="" />
              <Text>+880123443 </Text>
              <TextPara>Call Now </TextPara>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          mt="5rem"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          gap="30px"
        >
          <Grid item xs={12} sm={6} md={2.5}>
            <Box p="1rem">
              <img
                src={Food}
                alt=""
                style={{
                  borderRadius: "12px",
                  width: "100%",
                }}
              />
            </Box>
            <Box
              borderRadius="12px"
              backgroundColor="#D6E5D8 "
              p="1rem"
              mt="-60px"
              height={{ xs: "100%", md: "430px" }}
            >
              <Title2 mt="2rem">Sweet Potato Fries Bowl </Title2>
              <TextPrice>18$</TextPrice>
              <img src={Star} alt="" />
              <TextSmall>
                These Sweet Potato Fries bowl are a glorious, messy plate of
                goodness. Crispy sweet potato fries loaded with lots of fresh
                summer vegetables and a lime ranch. By adding a seasoning blend
                with chipotle powder, garlic, and onion, these spicy sweet
                potato fries are full of flavor.
              </TextSmall>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <Box p="1rem">
              <img
                src={Food1}
                alt=""
                style={{
                  borderRadius: "12px",
                  width: "100%",
                }}
              />
            </Box>
            <Box
              borderRadius="12px"
              backgroundColor="#D6E5D8 "
              p="1rem"
              mt="-60px"
              height={{ xs: "100%", md: "430px" }}
            >
              <Title2 mt="2rem"> Vegan Salad bowl </Title2>
              <TextPrice>18$</TextPrice>
              <img src={Star} alt="" />
              <TextSmall>
                Vegan salad bowl are immensely satisfying with any combination
                of whole grains, pulses, noodles, raw or cooked fruits, and
                veggies all topped off with a delicious sauce or dressing – each
                bite is an explosion of flavors and textures.
              </TextSmall>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.8}>
            <Title
              style={{
                fontSize: "32px",
                marginTop: "7rem",
              }}
            >
              Our Specials
            </Title>
            <Typography
              textAlign={{ xs: "center", md: "left" }}
              fontFamily="Raleway"
              fontSize="20px"
            >
              All of our food is prepared daily at our restaurants to ensure the
              highest quality, freshest meals are delivered to our customers
            </Typography>
            <BookTable
              style={{
                marginTop: "20px",
              }}
            >
              Book Table
            </BookTable>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurSpecial;
