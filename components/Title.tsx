import {
    Grid,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import React from "react";

interface TitleProps {
    title: String;
    subtitle?: String;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle = "" }) => {
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
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    sx={{
                        height: { xs: "2rem", md: "4rem" },
                        marginY: { xs: "0.5rem", md: "1rem" },
                    }}
                >
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        sx={{
                            borderRightWidth: "0.2rem",
                            color: "#F4FFF8",
                            background: "#F4FFF8",
                        }}
                    />
                </Grid>
                <Grid item>
                    <Typography variant={largeScreen ? "h3" : "h4"}>
                        {title}
                    </Typography>
                </Grid>
                {subtitle !== "" && (
                    <Grid item>
                        <Typography
                            variant={largeScreen ? "h6" : "h6"}
                            textAlign="center"
                        >
                            {subtitle}
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </ThemeProvider>
    );
};
