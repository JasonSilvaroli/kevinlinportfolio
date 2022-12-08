import { Grid } from "@mui/material";
import React from "react";
import { PreviousWork as PreviousWorkPage } from "../components/PreviousWork";

interface PreviousWorkProps {}

export const PreviousWork: React.FC<PreviousWorkProps> = ({}) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                margin: "auto",
                marginTop: "10rem",
                marginBottom: "3rem",
                maxWidth: "90vw",
            }}
        >
            <PreviousWorkPage />
        </Grid>
    );
};

export default PreviousWork;
