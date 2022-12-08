import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    Modal,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface WorkCardProps {
    image: StaticImageData;
    description: string;
    id: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    image,
    description,
    id,
}) => {
    const [hovered, setHovered] = React.useState("none");

    const theme = useTheme();

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const imageMaxW = largeScreen ? "500px" : "200px";

    const router = useRouter();

    const handleClick = () => {
        router.push(`/previousWork/${id}`);
    };

    return (
        <Paper
            sx={{
                width: "fit-content",
                position: "relative",
                zIndex: 5,
            }}
            onMouseEnter={() => setHovered("inline")}
            onMouseLeave={() => setHovered("none")}
        >
            <Image
                alt="content"
                src={image}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: imageMaxW,
                    minHeight: "250",
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
                        "radial-gradient(circle, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.8) 100%)",
                    cursor: "pointer",
                }}
                onClick={handleClick}
            >
                <Grid
                    item
                    sx={{
                        margin: "auto",
                        position: "absolute",
                        top: { xs: "30%", md: "10%" },
                        marginX: "10%",
                    }}
                >
                    <Typography
                        textAlign="center"
                        variant="body1"
                        fontWeight={"bold"}
                        sx={{ color: "#FBFAF5", height: "max-content" }}
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
