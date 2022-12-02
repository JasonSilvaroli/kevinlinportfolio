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
            sx={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
            <PreviousWorkPage />
        </Grid>
    );
};

export default PreviousWork;
