import {
    Button,
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

    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1rSclA5gs_UbGGy1aCOWixukg9qQEPLXb/preview",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "#FBFAF5",
                    width: { xs: "90%", md: "50%" },
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
                    <Grid item sx={{ marginTop: "1rem" }}>
                        <Button variant="contained" onClick={handleClick}>
                            Download
                        </Button>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            height: { xs: "25rem", md: "55rem" },
                            width: "100%",
                            marginTop: "1rem",
                        }}
                    >
                        <iframe
                            src="https://drive.google.com/file/d/1rSclA5gs_UbGGy1aCOWixukg9qQEPLXb/preview"
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            style={{ overflow: "hidden" }}
                        ></iframe>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
