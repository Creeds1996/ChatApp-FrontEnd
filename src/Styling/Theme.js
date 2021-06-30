import { blue, purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = {
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: purple[300]
        }
    },
    typography: {
        h1: {
            fontSize: "5em",
            textAlign: "center",
            "@media only screen and (max-width: 600px)": {
                fontSize: "2.5rem"
            }
        },
        h2: {
            fontSize: "1.75em",
            textAlign: "center",
            "@media only screen and (max-width: 600px)": {
                fontSize: ".85rem"
            }
        }
    }
};

const darkTheme = {
    ...defaultTheme,
    palette: {
        type: "dark",
        primary: {
            main: blue[800]
        },
        secondary: {
            main: purple[800]
        }
    }
}

const makeTheme = (darkMode) => {
    return createMuiTheme(darkMode ? darkTheme : defaultTheme);
};

export default makeTheme;