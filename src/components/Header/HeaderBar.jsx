import React from "react";
import { Box, Button, Container, Hidden } from "@mui/material";
import logo from "../assests/logo.svg";
import styled from "@emotion/styled";
import Drawer from "./Drawer";

const MyBtn = styled(Button)({
  color: "#3f3c3c",
  fontSize: "16px",
  fontFamily: "Raleway",
  fontWeight: 700,
  padding: "0.5rem",
  textDecoration: "none",
  "&:hover": {
    color: "#26643b",
    backgroundColor: "#ffff",
  },
});
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
const HeaderBar = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <img src={logo} alt="" />
          <Box display="flex" gap="1rem">
            <Hidden mdDown>
              <MyBtn>Home</MyBtn>
              <MyBtn>Menu</MyBtn>
              <MyBtn>About</MyBtn>
              <MyBtn>Contact</MyBtn>
              <BookTable>Book Table</BookTable>
            </Hidden>
            <Hidden mdUp>
              <Drawer />
            </Hidden>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeaderBar;
