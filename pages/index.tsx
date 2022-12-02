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
            <Head>
                <title>Kevin Lin - Creative Advertising</title>
                <meta name="description" content="kevin lin website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id="home-section">
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: "25rem", marginBottom: "25rem" }}
                >
                    <Grid item>
                        <Typography
                            textAlign={"center"}
                            variant="h2"
                            letterSpacing={10}
                            fontWeight="400"
                        >
                            Kevin Lin
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            textAlign={"center"}
                            variant="h6"
                            letterSpacing={5}
                            fontWeight="200"
                        >
                            Creative Advertising
                        </Typography>
                    </Grid>
                </Grid>
                <a className="anchor" id="about-section"></a>
                <div>
                    <About />
                </div>
                <div style={{ backgroundColor: "#F4FFF8" }}>
                    <Divider
                        variant="fullWidth"
                        sx={{
                            borderBottomWidth: "0.1rem",
                            color: "#F4FFF8",
                            background: "#F4FFF8",
                            width: "90%",
                            margin: "auto",
                        }}
                    />
                </div>
                <a className="anchor" id="work-section"></a>
                <div>
                    <PreviousWork />
                </div>
                <div style={{ backgroundColor: "#F4FFF8" }}>
                    <Divider
                        variant="fullWidth"
                        sx={{
                            borderBottomWidth: "0.1rem",
                            color: "#F4FFF8",
                            background: "#F4FFF8",
                            width: "90%",
                            margin: "auto",
                        }}
                    />
                </div>
                <a className="anchor" id="resume-section"></a>
                <div>
                    <Resume />
                </div>
            </main>
        </div>
    );
}
