import { Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container} id="test">
            <div style={{ opacity: 1 }} id="main">
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
                <Typography
                    color={"#FBFAF5"}
                    textAlign={"center"}
                    marginTop="20rem"
                >
                    Contact Me
                </Typography>
            </div>
        </div>
    );
}
