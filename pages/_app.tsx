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
import Head from "next/head";

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
                <Head>
                    <title>Kevin Lin - Art Direction</title>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/images/favicon_io/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/favicon_io/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/favicon_io/favicon-16x16.png"
                    />
                    <link
                        rel="manifest"
                        href="/images/favicon_io/site.webmanifest"
                    />
                </Head>
                <CssBaseline />
                <NavBar colorModeContext={ColorModeContext} />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
