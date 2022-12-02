import {
    Container,
    createTheme,
    Divider,
    Grid,
    ThemeProvider,
    Typography,
} from "@mui/material";
import React from "react";
import { Title } from "./Title";
import EmailIcon from "@mui/icons-material/Email";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import PlaceIcon from "@mui/icons-material/Place";
import ResumeInfo from "../utility/resume";

interface ResumeProps {}

export const Resume: React.FC<ResumeProps> = ({}) => {
    const theme = createTheme({
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
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item>
                        <Title title="Resume" />
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        sx={{ marginTop: "1rem" }}
                    >
                        <Grid
                            xs
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{ marginLeft: "10%" }}
                        >
                            <EmailIcon />
                            <a
                                href="mailto:kevinlin@gmail.com"
                                style={{
                                    textDecoration: "underline",
                                    color: "#0D1321",
                                }}
                            >
                                kevinlin@gmail.com
                            </a>
                        </Grid>
                        <Grid
                            xs
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <PhonelinkRingIcon />
                            <a
                                href="tel:+1 647 234 8643"
                                style={{
                                    textDecoration: "underline",
                                    color: "#0D1321",
                                }}
                            >
                                +1 647 234 8643
                            </a>
                        </Grid>
                        <Grid
                            xs
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <PlaceIcon />
                            <a
                                href="https://www.google.com/maps/place/Toronto,+ON/@43.7181552,-79.5184826,11z/"
                                target="_blank"
                                style={{
                                    textDecoration: "underline",
                                    color: "#0D1321",
                                }}
                            >
                                Toronto, Ontario
                            </a>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        sx={{ marginTop: "5rem" }}
                    >
                        <Grid
                            md
                            item
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{ marginLeft: "10%" }}
                        >
                            <Grid item>
                                <Typography variant="h4">Education</Typography>
                                <Divider
                                    variant="middle"
                                    sx={{
                                        borderBottomWidth: "0.2rem",
                                        color: "#F4FFF8",
                                        background: "#F4FFF8",
                                    }}
                                />
                            </Grid>
                            <Grid item sx={{ marginTop: "1rem" }}>
                                {ResumeInfo.education.map((item, index) => {
                                    return (
                                        <Grid
                                            item
                                            sx={{ marginTop: "0.5rem" }}
                                            key={index}
                                        >
                                            <Typography variant="h5">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body1">
                                                {item.programName}
                                            </Typography>
                                            <Typography variant="overline">
                                                {item.length}
                                            </Typography>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                            <Grid item sx={{ marginTop: "2rem" }}>
                                <Typography variant="h4">Skills</Typography>
                                <Divider
                                    variant="middle"
                                    sx={{
                                        borderBottomWidth: "0.2rem",
                                        color: "#F4FFF8",
                                        background: "#F4FFF8",
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                {ResumeInfo.skills.map((item, index) => {
                                    return (
                                        <Grid
                                            item
                                            sx={{
                                                marginTop: "1rem",
                                            }}
                                            key={index}
                                        >
                                            <Grid item>
                                                <Typography>{item}</Typography>
                                            </Grid>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                        <Grid
                            md
                            item
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item>
                                <Typography variant="h4">Experience</Typography>
                                <Divider
                                    variant="middle"
                                    sx={{
                                        borderBottomWidth: "0.2rem",
                                        color: "#F4FFF8",
                                        background: "#F4FFF8",
                                    }}
                                />
                            </Grid>

                            <Grid item sx={{ width: "50%" }}>
                                {ResumeInfo.experience.map((item, index) => {
                                    return (
                                        <Grid
                                            item
                                            sx={{
                                                marginTop: "1rem",
                                            }}
                                            key={index}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={{ marginBottom: "0.5rem" }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ marginBottom: "0.3rem" }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ marginBottom: "0.3rem" }}
                                            >
                                                {item.length}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                display="block"
                                            >
                                                {item.description}
                                            </Typography>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                        <Grid
                            md
                            item
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        ></Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
