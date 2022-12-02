import {
    Box,
    Card,
    Container,
    Grid,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface WorkCardProps {
    image: string;
    description: string;
    height: number;
    width: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    image,
    description,
    width,
    height,
}) => {
    const [hovered, setHovered] = React.useState("none");

    const theme = useTheme();

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const imageMaxW = largeScreen ? "200px" : "500px";

    return (
        <Paper
            sx={{ width: "fit-content", position: "relative", zIndex: 5 }}
            onMouseEnter={() => setHovered("inline")}
            onMouseLeave={() => setHovered("none")}
        >
            <img
                alt="content"
                src={image}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: largeScreen ? "500px" : "300px",
                }}
            />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                display={hovered}
                sx={{
                    position: "absolute",
                    margin: "auto",
                    height: "100%",
                    left: 0,
                    background:
                        "radial-gradient(circle, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.7) 100%)",
                }}
            >
                <Grid
                    item
                    sx={{
                        margin: "auto",
                        position: "absolute",
                        top: { xs: "30%", md: "45%" },
                        marginX: "10%",
                    }}
                >
                    <Typography textAlign="center">{description}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
