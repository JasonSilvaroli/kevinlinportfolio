import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Head from "next/head";
import { useRef } from "react";
import { About } from "../components/About";
import { Polaroid } from "../components/Polaroid";
import { PreviousWork } from "../components/PreviousWork";
import { Resume } from "../components/Resume";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <main style={{ opacity: 1 }}>
                <a id="home-section"></a>
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
                            Creative Advertising
                        </Typography>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}
