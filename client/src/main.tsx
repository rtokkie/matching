import "./index.css";
import "./firebaseApp";

import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const extendedTheme = extendTheme({
  colors: {
    primary: {
      500: theme.colors.green["400"],
      600: theme.colors.green["500"],
    },
    secondary: {
      500: theme.colors.red["400"],
      600: theme.colors.red["500"],
    },
  },
  components: {
    Steps,
    FormLabel: {
      baseStyle: {
        fontWeight: "semibold",
        fontSize: "sm",
      },
    },
    FormErrorMessage: {
      baseStyle: {
        fontSize: "sm",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
