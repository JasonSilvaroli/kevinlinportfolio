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
                        width: "auto",
                        margin: 0,
                        paddingBottom: "3rem",
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
                            sx={{
                                width: { xs: "75%", md: "50%" },
                                marginTop: "2rem",
                            }}
                        >
                            <Typography variant="body1">
                                &emsp;&emsp;Nam tooverslag met als bevaarbaar
                                mogendheid ondernomen. Luister javanen om ad
                                leveren krijgen. In in langs welks lucht halen
                                groen voort. Zin roestige troepjes gif indische
                                ook. Was sap apen vorm van rug maal. Gouden
                                vloeit ad en er schaal. Misschien zes opbrengst
                                bewegende zin elk met. Vergissing far buitendien
                                ten verbazende ook verwijderd wantrouwen.
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                                &emsp;&emsp;Groot geeft omdat loopt tin het het
                                sterk terug een. Lieden handen enkele kleine en
                                eerder mollen of ze. Te bordeaux op de werkzaam
                                overgaat nu. Mag bewijs het zelden verder van
                                wat. Kwarts bamboe meende liever van voeten ton
                                mooren aan hun. De bezorgden gomboomen kleederen
                                af de gewijzigd.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </ThemeProvider>
    );
};
