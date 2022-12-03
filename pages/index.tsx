import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Container id="main" sx={{ background: "rgba(76, 175, 80, 0)" }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: "25rem" }}
            >
                <Grid item>
                    <Typography
                        textAlign={"center"}
                        variant="h2"
                        letterSpacing={10}
                        fontWeight="400"
                        color={"#FBFAF5"}
                    >
                        Kevin Lin
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        color={"#FBFAF5"}
                        textAlign={"center"}
                        variant="h6"
                        letterSpacing={5}
                        fontWeight="300"
                    >
                        Art Direction
                    </Typography>
                </Grid>
            </Grid>
            <Link href="/contact">
                <Typography
                    color={"#FBFAF5"}
                    textAlign={"center"}
                    sx={{ marginTop: { xs: "0rem", md: "20rem" } }}
                >
                    Contact Me
                </Typography>
            </Link>
        </Container>
    );
}
