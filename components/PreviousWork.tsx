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
import workList from "../utility/workList";
import { Title } from "./Title";

import Pic1 from "../public/images/campaigns/image1.png";
import Pic2 from "../public/images/campaigns/image2.png";
import Pic3 from "../public/images/campaigns/image3.png";
import Pic4 from "../public/images/campaigns/image4.png";
import Pic5 from "../public/images/campaigns/image5.png";
import Pic6 from "../public/images/campaigns/image6.png";
import Pic7 from "../public/images/campaigns/image7.png";
import Pic8 from "../public/images/campaigns/image8.png";
import Pic9 from "../public/images/campaigns/image9.png";
import Pic10 from "../public/images/campaigns/image10.png";
import Pic11 from "../public/images/campaigns/image11.png";
import Pic12 from "../public/images/campaigns/image12.png";
import Pic13 from "../public/images/campaigns/image13.png";
import Pic14 from "../public/images/campaigns/image14.png";
import Pic15 from "../public/images/campaigns/image15.png";
import Pic16 from "../public/images/campaigns/image16.png";
import Pic17 from "../public/images/campaigns/image17.png";

interface PreviousWorkProps {}

export const PreviousWork: React.FC<PreviousWorkProps> = ({}) => {
    const theme = useTheme();

    const picArray = [
        Pic1,
        Pic2,
        Pic3,
        Pic4,
        Pic5,
        Pic6,
        Pic7,
        Pic8,
        Pic9,
        Pic10,
        Pic11,
        Pic12,
        Pic13,
        Pic14,
        Pic15,
        Pic16,
        Pic17,
    ];

    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

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
                        subtitle="These are some examples of my previous work"
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
                            {workList.map((obj, index) => {
                                return (
                                    <ImageListItem key={index}>
                                        <WorkCard
                                            image={picArray[index]}
                                            description={obj.description}
                                        />
                                    </ImageListItem>
                                );
                            })}
                        </ImageList>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
