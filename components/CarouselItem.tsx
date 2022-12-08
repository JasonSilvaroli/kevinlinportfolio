import { Grid, Modal, Box } from "@mui/material";
import Carousel from "better-react-carousel";
import { StaticImageData } from "next/image";
import React from "react";
import style from "styled-jsx/style";
import Image from "next/image";

interface CarouselItemProps {
    image: StaticImageData;
    index: Number;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ image, index }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("test");

    return (
        <Carousel.Item>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                onClick={handleOpen}
            >
                <Image
                    src={image}
                    alt={String(index)}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Grid>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style} onClick={handleClose}>
                    <Image
                        src={image}
                        alt={String(index)}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Box>
            </Modal>
            {console.log("qwe")}
        </Carousel.Item>
    );
};
