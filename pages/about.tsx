import { Container } from "@mui/material";
import React from "react";
import { About as AboutPage } from "../components/About";

interface aboutProps {}

export const About: React.FC<aboutProps> = ({}) => {
    return (
        <Container>
            <AboutPage />
        </Container>
    );
};

export default About;
