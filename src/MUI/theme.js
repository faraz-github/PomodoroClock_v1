import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: "#f1f1f1",
            main: "#EEEEEE",
            dark: "#a6a6a6"
        },
        secondary: {
            light: "#33bdc3",
            main: "#00ADB5",
            dark: "#00797e"
        }
    },
    typography: {
        fontFamily: 'Saira'
    }
});

export default theme;