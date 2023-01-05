import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";

const Drawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        color: "#fff",
        fontFamily: "Poppins",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ fontFamily: "Poppins" }}>
        {["Home", "Menu", "About", "Contact", "Book Table"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {index === 5 ? (
                  <Button
                    sx={{
                      color: "#ffffff",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "12px",
                      borderRadius: "9px",
                      height: "43px",
                      width: "130px",
                      backgroundColor: "#26643b",
                    }}
                  >
                    Book Table
                  </Button>
                ) : index === 4 ? (
                  <Button
                    sx={{
                      color: "#ffffff",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "12px",
                      border: "2px solid #ffffff",
                      borderRadius: "9px",
                      height: "43px",
                      width: "130px",
                      backgroundColor: "#26643b",
                    }}
                  >
                    Book Table
                  </Button>
                ) : (
                  <ListItemText primary={text} />
                )}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<MenuIcon sx={{ color: "#000" }} />}
          </Button>
          <SwipeableDrawer
            sx={{
              ".css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
                backgroundColor: "#1C1B22",
              },
              //   fontFamily: "Poppins",
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Drawer;
