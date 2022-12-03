import { Container, Grid, ImageList } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Slide } from "react-slideshow-image";
import { Title } from "../../components/Title";
import workList from "../../utility/workList";

interface AdPageProps {}

export const AdPage: React.FC<AdPageProps> = ({}) => {
    const router = useRouter();

    const { id } = router.query;

    console.log(id);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
            <Grid item>
                <Slide>
                    {workList[0].images.map((image) => {
                        return (
                            <div className="each-slide-effect">
                                <div
                                    style={{
                                        backgroundImage: `url(/../../../public/images/campaign${id}/${image})`,
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </Slide>
            </Grid>
        </Grid>
    );
};

export default AdPage;
