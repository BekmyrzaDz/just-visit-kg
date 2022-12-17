// mui
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// components
import ImageSlider from "../../../../ImageSlider/ImageSlider";
// styles
import styled from "./DescriptionItem.module.scss";
// context
import { Context } from "../../../PostPlaces";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const DescriptionItem = () => {
  const navigate = useNavigate();
  const props = useContext(Context);

  const { actual } = props.Context._currentValue2.data.toursData;

  const containerStyles = {
    width: "563px",
    height: "473px",
    marginBottom: "35px",
  };

  return (
    <>
      {actual
        .filter((post) => post.id === 1)
        .map((place) => (
          <Box key={place.id}>
            <Container maxWidth="1380px">
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <span className={styled.goBack} onClick={() => navigate(-1)}>
                  Назад
                </span>
                <h3 className={styled.title}>{place.title}</h3>
              </Box>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                  <Box sx={containerStyles}>
                    <ImageSlider slides={place.images} />
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box className={styled.descr}>
                    <Typography className={styled.description}>
                      {place.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ))}
    </>
  );
};

export default DescriptionItem;
