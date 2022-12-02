import {
    createTheme,
    Paper,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
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

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <ThemeProvider theme={theme}>
            <Paper
                sx={{
                    width: "100%",
                    textAlign: "center",
                    position: "fixed",
                    bottom: 0,
                    zIndex: 10,
                    backgroundColor: "#FBFAF5",
                }}
            >
                <Typography
                    display="inline-block"
                    variant={largeScreen ? "overline" : "subtitle1"}
                    fontSize={10}
                >
                    &#169; 2022 by Kevin Lin. Website created by&nbsp;
                </Typography>
                <a href="https://www.jasonsilvaroli.com" target="_blank">
                    <Typography
                        variant={largeScreen ? "overline" : "subtitle1"}
                        fontSize={10}
                        display="inline-block"
                        sx={{ textDecoration: "underline" }}
                    >
                        Jason Silvaroli
                    </Typography>
                </a>
            </Paper>
        </ThemeProvider>
    );
};
