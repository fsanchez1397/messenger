import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    intialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", // Updated "font-family" to "fontFamily"
        WebkitFontSmoothing: "antialiased", // Updated from "-webkit-font-smoothing" to "WebkitFontSmoothing"
        MozOsxFontSmoothing: "grayscale", // Updated from "-moz-osx-font-smoothing" to "MozOsxFontSmoothing"
      },
      code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace", // Updated "font-family" to "fontFamily"
      },
    },
  },
};

export default extendTheme(theme);