import React from "react";
import { CacheProvider } from "@emotion/react";
import {
    ThemeProvider,
    CssBaseline,
    createTheme,
    useMediaQuery,
    useTheme,
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

    const theme = useTheme();

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar colorModeContext={ColorModeContext} />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
