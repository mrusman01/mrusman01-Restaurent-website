import { createTheme } from "@mui/material/styles";

export const createCustomTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      //   primary: {
      //     main: '#00419E',
      //     light: '#0b63e0',
      //   },
      //   secondary: {
      //     main: '#D6EDF6',
      //   },
    },
    typography: {
      fontFamily: ['"Poppins"', '"Raleway"', "sans-serif"].join(","),
      h1: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: "4rem",
      },
      h4: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: "1.125rem",
      },
      body1: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: "0.875rem",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: (theme) => `
          body {
            background-color: "#f5fcf4"
          }
        `,
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "gradient" },
            style: {
              background:
                "linear-gradient(97.01deg, #6C7DEB 8.16%, #50A6ED 103.71%)",
              boxShadow: "0px 0px 33px rgba(0, 0, 0, 0.3)",
              color: "#3f3c3c",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.045em",
              "&:hover": {
                background:
                  "linear-gradient(97.01deg, #50A6ED 8.16%, #6C7DEB 103.71%)",
              },
            },
          },
        ],
      },
    },
  });
