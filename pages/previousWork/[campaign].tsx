import {
    Box,
    Container,
    Grid,
    Modal,
    Paper,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme,
    IconButton,
    Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Title } from "../../components/Title";
import {
    getCampaign,
    defaultCampaign,
    CampaignInterface,
} from "../../utility/createProjects";
import Image from "next/image";
import Carousel from "better-react-carousel";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface campaignProps {}

const Campaign: React.FC<campaignProps> = ({}) => {
    const router = useRouter();

    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const imagePadding = largeScreen ? "2rem" : "1rem";
    const imageHeight = largeScreen ? "100vh" : "auto";
    const imageWidth = largeScreen ? "auto" : "90vw";

    const [campaignInfo, setCampaignInfo] =
        React.useState<CampaignInterface>(defaultCampaign);

    React.useEffect(() => {
        if (router.query.campaign) {
            var tempInfo = getCampaign(router.query.campaign);

            setCampaignInfo(tempInfo);
        }
    });

    const [open, setOpen] = React.useState(-1);
    const handleOpen = (index: number) => setOpen(index);
    const handleClose = () => setOpen(-1);

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 4,
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: "#FBFAF5",
                    margin: "auto",
                    paddingBottom: "1rem",
                    paddingTop: "1rem",
                    borderRadius: "10px",
                    marginTop: "10rem",
                    marginBottom: "3rem",
                    maxWidth: { xs: "90%", md: "70%" },
                }}
            >
                <Grid item>
                    <Title
                        title={campaignInfo.name}
                        subtitle={campaignInfo.description}
                    />
                </Grid>
                <Grid item sx={{ marginTop: "5rem" }}>
                    {campaignInfo.complete && (
                        <div>
                            <Carousel
                                cols={3}
                                rows={1}
                                gap={10}
                                loop={true}
                                autoplay={10000}
                            >
                                {campaignInfo.photos?.map((obj, index) => {
                                    return (
                                        <Carousel.Item>
                                            <Grid
                                                container
                                                direction="column"
                                                justifyContent="center"
                                                alignItems="center"
                                                onClick={() =>
                                                    handleOpen(index)
                                                }
                                                id="test"
                                                style={{ height: "100%" }}
                                            >
                                                <Grid
                                                    item
                                                    style={{ height: "100%" }}
                                                >
                                                    <Image
                                                        src={obj}
                                                        alt={String(index)}
                                                        key={index}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                        priority
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Modal
                                                open={open === index}
                                                onClose={handleClose}
                                                sx={{
                                                    width: "100%",
                                                    margin: 0,
                                                }}
                                            >
                                                <Box
                                                    sx={style}
                                                    onClick={handleClose}
                                                >
                                                    <Image
                                                        src={obj}
                                                        alt={String(index)}
                                                        key={index}
                                                        style={{
                                                            maxWidth: "90vw",
                                                            maxHeight: "90vh",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                </Box>
                                            </Modal>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                            {campaignInfo.collaborators?.length !== 0 && (
                                <div>
                                    <Divider
                                        sx={{
                                            margin: "auto",
                                            marginY: "5vh",
                                            width: "90%",
                                        }}
                                    ></Divider>
                                    <Typography textAlign="center" variant="h5">
                                        Collaborators
                                    </Typography>
                                    {campaignInfo.collaborators?.map((name) => {
                                        return (
                                            <Typography textAlign="center">
                                                {name}
                                            </Typography>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                </Grid>
                {!campaignInfo.complete && (
                    <Link href="/previousWork">
                        <Typography>Go back</Typography>
                    </Link>
                )}
            </Grid>
        </ThemeProvider>
    );
};

export default Campaign;
