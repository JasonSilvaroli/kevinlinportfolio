import { Grid } from "@mui/material";
import React from "react";
import { Resume } from "../components/Resume";

interface resumeProps {}

export const resume: React.FC<resumeProps> = ({}) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
            <Resume />
        </Grid>
    );
};

export default resume;
