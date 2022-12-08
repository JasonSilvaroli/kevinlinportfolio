import {
    Container,
    Divider,
    Grid,
    ImageList,
    ImageListItem,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { WorkCard } from "./WorkCard";
import { Title } from "./Title";
import {
    CampaignInterface,
    getCampaign,
    getCampaignIcons,
} from "../utility/createProjects";

interface PreviousWorkProps {}

export const PreviousWork: React.FC<PreviousWorkProps> = ({}) => {
    const theme = useTheme();

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    getCampaign("ritz");

    const workList = getCampaignIcons();

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "#FBFAF5",
                    width: "auto",
                    margin: 0,
                    paddingBottom: "1rem",
                    paddingTop: "1rem",
                    borderRadius: "10px",
                }}
            >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Title
                        title="Previous Work"
                        subtitle="These are some examples of my previous campaigns"
                    />

                    <Grid
                        container
                        item
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ marginTop: { xs: "1rem", md: "3rem" } }}
                    >
                        <ImageList
                            variant="masonry"
                            cols={largeScreen ? 3 : 1}
                            gap={largeScreen ? 16 : 8}
                        >
                            {workList.map(
                                (obj: CampaignInterface, index: number) => {
                                    return (
                                        <ImageListItem key={index}>
                                            <WorkCard
                                                id={obj.id}
                                                image={obj.logo}
                                                description={obj.description}
                                            ></WorkCard>
                                        </ImageListItem>
                                    );
                                }
                            )}
                        </ImageList>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
