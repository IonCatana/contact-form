import { createTheme } from "@mui/material/styles";
import { pxToRem } from "./utils/pxToRem";

const theme = createTheme({
  palette: {
    grey: {
      900: "#2A4144", // Grey 900
      500: "#86A2A5", // Grey 500
    },
    green: {
      600: "#0C7D69", // Green 600
      200: "#E0F1E8", // Green 200
    },
    red: {
      error: "#D73C3C", // Red (Errors)
    },
    white: "#FFFFFF", // White
    background: {
      default: "#E0F1E8", // Green 200 (sfondo predefinito)
      paper: "#FFFFFF", // White (per sfondi secondari)
    },
    text: {
      primary: "#2A4144", // Grey 900
      secondary: "#86A2A5", // Grey 500
    },
  },
  typography: {
    fontFamily: "Karla, sans-serif",
    heading: {
      fontSize: pxToRem(32),
      fontWeight: 700,
      lineHeight: "100%",
      letterSpacing: "-1px",
    },
    bodyMbold: {
      fontSize: pxToRem(18),
      lineHeight: "150%",
      fontWeight: 700,
      letterSpacing: "0px",
    },
    bodyM: {
      fontSize: pxToRem(18),
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    bodyS: {
      fontSize: pxToRem(16),
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: "0px",
    },
  },
});

export default theme;
