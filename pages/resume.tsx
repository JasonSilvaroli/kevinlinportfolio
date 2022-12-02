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
            sx={{ marginTop: "10%" }}
        >
            <Resume />
        </Grid>
    );
};

export default resume;
