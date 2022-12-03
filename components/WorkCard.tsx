import {
    Box,
    Card,
    Container,
    Grid,
    Modal,
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
}

export const WorkCard: React.FC<WorkCardProps> = ({ image, description }) => {
    const [hovered, setHovered] = React.useState("none");

    const theme = useTheme();

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const imageMaxW = largeScreen ? "200px" : "500px";

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.log("here");
    };
    const handleClose = () => setOpen(false);

    return (
        <Paper
            sx={{
                width: "fit-content",
                position: "relative",
                zIndex: 5,
                minHeight: "150px",
            }}
            onMouseEnter={() => setHovered("inline")}
            onMouseLeave={() => setHovered("none")}
        >
            <Modal open={open} onClose={handleClose}>
                <Container sx={{ maxWidth: "80%", height: "50%" }}>
                    <Image
                        alt="content"
                        src={image}
                        style={{
                            height: "auto",
                            maxWidth: largeScreen ? "500px" : "300px",
                            minHeight: "250",
                        }}
                        width="800"
                        height="100"
                    />
                </Container>
            </Modal>
            <Image
                alt="content"
                src={image}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: largeScreen ? "500px" : "300px",
                    minHeight: "250",
                }}
                width="200"
                height="100"
            />
            <Grid
                container
                onClick={handleOpen}
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
                    onClick={handleOpen}
                    sx={{
                        margin: "auto",
                        position: "absolute",
                        top: { xs: "30%", md: "10%" },
                        marginX: "10%",
                    }}
                >
                    <Typography
                        onClick={handleOpen}
                        textAlign="center"
                        variant="body1"
                        fontSize={12}
                        sx={{ color: "#FBFAF5", height: "max-content" }}
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
