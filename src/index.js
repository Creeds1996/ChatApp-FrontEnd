import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import App from "./App";
import { ContextProvider } from "./SocketContext";
import makeTheme from "./Styling/Theme";


const theme = makeTheme(true);

ReactDOM.render(<ContextProvider>
<ThemeProvider theme={theme}>
<CssBaseline />
<App/>
</ThemeProvider>
</ContextProvider>, document.getElementById("root"))