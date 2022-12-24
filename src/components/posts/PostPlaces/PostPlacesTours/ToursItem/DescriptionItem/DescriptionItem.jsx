// mui
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// components
import ImageSlider from "../../../../ImageSlider/ImageSlider";
// styles
import styled from "./DescriptionItem.module.scss";
// context
import { Context } from "../../../PostPlaces";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTourById } from "../../../../../../redux/features/tour/tourAction";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DescriptionItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const props = useContext(Context);

  const { actual } = props.Context._currentValue2.data.toursData;

  const { tour, isLoading } = useSelector((store) => store.tour);
  const dispatch = useDispatch();
  console.log(tour);

  useEffect(() => {
    dispatch(fetchTourById(id));
  }, [dispatch]);

  const containerStyles = {
    width: "563px",
    height: "473px",
    marginBottom: "35px",
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box>
            <Container maxWidth="1380px">
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <span className={styled.goBack} onClick={() => navigate(-1)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  Назад
                </span>
                <h3 className={styled.title}>{tour.name}</h3>
              </Box>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                  <Box sx={containerStyles}>
                    <ImageSlider slides={tour.image} />
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box className={styled.descr}>
                    <Typography className={styled.description}>
                      {tour.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default DescriptionItem;
