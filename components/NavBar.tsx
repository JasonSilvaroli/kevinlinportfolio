import {
    Box,
    Grid,
    IconButton,
    Paper,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { Context } from "react";
import Logo from "../public/images/logo.png";
import { createTheme } from "@mui/system";
import Image from "next/image";
interface NavBarProps {
    colorModeContext: Context<{
        toggleColorMode: () => void;
    }>;
}

export const NavBar: React.FC<NavBarProps> = ({ colorModeContext }) => {
    const theme = useTheme();
    const colorMode = React.useContext(colorModeContext);

    const titleTheme = createTheme({
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: "#0D1321",
                    },
                },
            },
        },
    });

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <ThemeProvider theme={theme}>
            <Paper
                sx={{
                    backgroundColor: "#FBFAF5",
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 10,
                }}
            >
                <Grid
                    container
                    direction={largeScreen ? "row" : "column"}
                    justifyContent={largeScreen ? "flex-start" : "flex-start"}
                    alignItems={largeScreen ? "center" : "flex-start"}
                >
                    <ThemeProvider theme={titleTheme}>
                        <Link href="/">
                            <Grid
                                xs
                                item
                                sx={{
                                    marginTop: "1rem",
                                }}
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    sx={{
                                        marginLeft: {
                                            xs: "1rem",
                                            md: "2rem",
                                        },
                                        marginTop: "0.5rem",
                                    }}
                                >
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        width="50"
                                        height="50"
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant={largeScreen ? "h4" : "h4"}
                                        sx={{
                                            ...(largeScreen && {
                                                marginLeft: "1rem",
                                            }),
                                            ...(!largeScreen && {
                                                margin: "auto",
                                            }),
                                        }}
                                    >
                                        Kevin Lin
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                        <Grid
                            xs
                            item
                            container
                            direction={"row"}
                            justifyContent={largeScreen ? "flex-end" : "center"}
                            alignItems={largeScreen ? "center" : "flex-end"}
                            spacing={largeScreen ? 4 : 1}
                            sx={{
                                marginRight: "7rem",
                                marginTop: { xs: "-1.5rem", md: "-1rem" },
                                padding: 0,
                            }}
                        >
                            <Grid
                                item
                                sx={{
                                    padding: 0,
                                }}
                            >
                                <Link href="/">
                                    <Typography
                                        variant={
                                            largeScreen ? "h5" : "subtitle1"
                                        }
                                    >
                                        Home
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#about-section">
                                    <Typography
                                        variant={
                                            largeScreen ? "h5" : "subtitle1"
                                        }
                                    >
                                        About Me
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#work-section">
                                    <Typography
                                        variant={
                                            largeScreen ? "h5" : "subtitle1"
                                        }
                                    >
                                        Work
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#resume-section">
                                    <Typography
                                        variant={
                                            largeScreen ? "h5" : "subtitle1"
                                        }
                                    >
                                        Resume
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#contact-section">
                                    <Typography
                                        variant={
                                            largeScreen ? "h5" : "subtitle1"
                                        }
                                    >
                                        Contact
                                    </Typography>
                                </Link>
                            </Grid>

                            {/* <Grid item>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            color="inherit"
                        >
                            {theme.palette.mode === "dark" ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Grid> */}
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Paper>
        </ThemeProvider>
    );
};
