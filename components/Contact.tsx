import {
    Container,
    createTheme,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { Title } from "./Title";
import EmailIcon from "@mui/icons-material/Email";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import Logo from "../public/images/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import Kevin from "../public/images/kkevin.jpg";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
    const theme = useTheme();

    const innerTheme = createTheme({
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
            <ThemeProvider theme={innerTheme}>
                <Container
                    maxWidth={false}
                    sx={{
                        backgroundColor: "#FBFAF5",
                        width: { xs: "75%", md: "50%" },
                        margin: 0,
                        paddingBottom: "1rem",
                        paddingTop: "1rem",
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item>
                            <Title title="Contact Me" />
                        </Grid>
                        <Grid
                            item
                            container
                            direction={largeScreen ? "row" : "column"}
                            alignItems="flex-start"
                            justifyContent="center"
                            spacing={3}
                            sx={{ marginTop: "2rem" }}
                        >
                            <Grid
                                item
                                container
                                spacing={3}
                                xs={6}
                                direction={"column"}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid
                                    xs
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        width="40"
                                        height="40"
                                    />
                                    <Typography
                                        variant={largeScreen ? "h4" : "h6"}
                                        sx={{ marginLeft: "2rem" }}
                                    >
                                        Kevin Lin
                                    </Typography>
                                </Grid>
                                <Grid
                                    xs
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <PhonelinkRingIcon fontSize="large" />
                                    <a
                                        href="tel:+1 647 979 8348"
                                        style={{
                                            color: "#0D1321",
                                        }}
                                    >
                                        <Typography
                                            variant={largeScreen ? "h4" : "h6"}
                                            sx={{ marginLeft: "2rem" }}
                                        >
                                            +1 647 979 8348
                                        </Typography>
                                    </a>
                                </Grid>
                                <Grid
                                    xs
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <EmailIcon fontSize="large" />
                                    <a
                                        href="mailto:kevinlin@gmail.com"
                                        style={{
                                            color: "#0D1321",
                                        }}
                                    >
                                        <Typography
                                            variant={largeScreen ? "h4" : "h6"}
                                            sx={{ marginLeft: "2rem" }}
                                        >
                                            kevinlin@gmail.com
                                        </Typography>
                                    </a>
                                </Grid>
                                <Grid
                                    xs
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <LinkedInIcon fontSize="large" />
                                    <a
                                        href="https://www.linkedin.com/in/kevinlin2001/"
                                        target="_blank"
                                        style={{
                                            color: "#0D1321",
                                        }}
                                    >
                                        <Typography
                                            variant={largeScreen ? "h4" : "h6"}
                                            sx={{ marginLeft: "2rem" }}
                                        >
                                            Linkedin
                                        </Typography>
                                    </a>
                                </Grid>
                                <Grid
                                    xs
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <DownloadIcon fontSize="large" />
                                    <a
                                        href="https://www.linkedin.com/in/kevinlin2001/"
                                        target="_blank"
                                        style={{
                                            color: "#0D1321",
                                        }}
                                    >
                                        <Typography
                                            variant={largeScreen ? "h4" : "h6"}
                                            sx={{ marginLeft: "2rem" }}
                                        >
                                            My Resume
                                        </Typography>
                                    </a>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                justifyContent="center"
                                alignItems="center"
                                container
                            >
                                <Image
                                    src={Kevin}
                                    alt="kevin"
                                    layout="responsive"
                                ></Image>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </ThemeProvider>
    );
};
