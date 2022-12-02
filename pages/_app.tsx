import React from "react";
import { CacheProvider } from "@emotion/react";
import {
    ThemeProvider,
    CssBaseline,
    createTheme,
    useMediaQuery,
} from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import darkTheme from "../styles/theme/darkTheme";
import "../styles/globals.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const clientSideEmotionCache = createEmotionCache();
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyApp = (props: any) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = React.useState<"light" | "dark">(
        prefersDarkMode ? "dark" : "light"
    );

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () => (mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavBar colorModeContext={ColorModeContext} />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </CacheProvider>
        </ColorModeContext.Provider>
    );
};

export default MyApp;
