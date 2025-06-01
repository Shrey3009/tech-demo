// src/theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "gray.900")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
      fontFamily: "'Nunito', sans-serif",
    },
   "*, h1, h2, h3, h4, h5, h6": {
      fontFamily: "'Manjari', sans-serif",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: `'Manjari', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  colors: {
    brand: {
      primary: "#FFBE02", // Vivid Orange
      violet: "#594493",  // Dark Violet
      softBlue: "#9BBBF1" // Soft Blue
    },
  },
});

export default theme;
