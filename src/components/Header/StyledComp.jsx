import { Button, styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  color: "#3f3c3c",
  fontSize: "2.8rem",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "1.7rem",
  },
  fontWeight: "600",
  fontFamily: "Poppins",
  textAlign: "left",
  lineHeight: "3.8rem",
}));

export const MyBtn = styled(Button)(({ theme }) => ({
  color: "#26643b",
  fontSize: "16px",
  fontFamily: "Raleway",
  fontWeight: 700,
  padding: "0.5rem",
  textDecoration: "none",
  margin: "0px 1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
}));

export const BookTable = styled(Button)(({ theme }) => ({
  backgroundColor: "#26643B",
  color: "#e8e8e8",
  fontSize: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
  fontWeight: 700,
  padding: "8px 20px",
  borderRadius: "10px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#26643b",
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  color: "#3f3c3c",
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "15px",
  },
  fontFamily: "Poppins",
}));
export const TextPara = styled(Typography)(({ theme }) => ({
  color: "#3f3c3c",
  fontSize: "15px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "15px",
  },
  fontFamily: "Poppins",
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  color: "#3f3c3c",
  fontSize: "23px",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
  fontWeight: 600,
  fontFamily: "Poppins",
}));
export const TextPrice = styled(Typography)(({ theme }) => ({
  color: "#26643B",
  fontSize: "20px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  fontWeight: 600,
  fontFamily: "Poppins",
}));

export const TextSmall = styled(Typography)({
  color: "#3F3C3Cs",
  fontSize: "15px",
  marginTop: "7px",
  fontFamily: "Raleway",
});
