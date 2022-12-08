import {
    Container,
    createTheme,
    Divider,
    Grid,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { Title } from "./Title";
import Kevin from "../public/images/kkevin.jpg";
import Image from "next/image";
import Link from "next/link";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
    const theme = useTheme();

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

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

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={innerTheme}>
                <Container
                    maxWidth={false}
                    sx={{
                        backgroundColor: "#FBFAF5",
                        width: { xs: "90%", md: "50%" },
                        margin: 0,
                        paddingBottom: "2rem",
                        borderRadius: "10px",
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Title title="About" />
                        <Grid
                            item
                            container
                            sx={{
                                width: "100%",
                                marginY: "2rem",
                            }}
                            direction={largeScreen ? "row" : "column"}
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item xs={5}>
                                <Image
                                    src={Kevin}
                                    alt="kevin"
                                    layout="responsive"
                                ></Image>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    I’m Kevin Lin, an aspiring creative with an
                                    excessive amount of energy. I’m a 21 year
                                    old Chinese Canadian/American who has
                                    stumbled onto this field by accident and I
                                    am constantly looking to improve my craft
                                    and skills.
                                </Typography>
                                <br></br>
                                <Typography variant="body1">
                                    Although my mandarin may be at a third grade
                                    level I can assure you that my work ethic is
                                    out of this world. As a visual and very
                                    hands-on learner, I've always wondered what
                                    I wanted to do in life and this is where it
                                    has led me so far. What I do know is that my
                                    end goal is to be kind to everyone and help
                                    others.
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    For fun I enjoy spending time with my
                                    friends, wandering the streets, gaming, and
                                    going to the gym (I go 6 days a week so you
                                    know i’m consistent).
                                </Typography>
                                <br />
                                <Typography variant="body1" display="inline">
                                    Lets chat sometime! I am always looking
                                    forward to meeting new people and hearing
                                    their story!
                                </Typography>
                                <br />
                                <br />
                                <Link href="/contact">
                                    <Typography
                                        variant="body1"
                                        textAlign="center"
                                    >
                                        Contact Me
                                    </Typography>
                                </Link>
                                <br />

                                <Typography
                                    variant="subtitle2"
                                    textAlign="center"
                                    fontWeight={400}
                                >
                                    P.S. I have dual citizenship in case you are
                                    wondering!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </ThemeProvider>
    );
};
