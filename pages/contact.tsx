import { Grid } from "@mui/material";
import React from "react";
import { Contact as ContactPage } from "../components/Contact";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
            <ContactPage />
        </Grid>
    );
};

export default Contact;
