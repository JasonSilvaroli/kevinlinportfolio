import { Container, Grid } from "@mui/material";
import React from "react";
import { About as AboutPage } from "../components/About";

interface aboutProps {}

export const About: React.FC<aboutProps> = ({}) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
            <AboutPage />
        </Grid>
    );
};

export default About;
