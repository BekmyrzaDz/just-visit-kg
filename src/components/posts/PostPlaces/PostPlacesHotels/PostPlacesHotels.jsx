import React, { useContext, useEffect } from "react";
// mui
import { CircularProgress, Grid } from "@mui/material";
// styles
import styled from "./PostPlacesHotels.module.scss";
import "../../../../styles/variables.scss";
// images
import hotel from "../../../../assets/images/hotel1.jpg";
import like from "../../../../assets/images/like.svg";
import star from "../../../../assets/images/star.svg";
import location from "../../../../assets/images/location.svg";
// Context
import { Context } from "../PostPlaces";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../../../../redux/features/place/placeAction";

const PostPlacesHotels = () => {
  const props = useContext(Context);
  // console.log(props);
  const { hotelsData } = props.Context._currentValue2.data;

  const { places, isLoading } = useSelector((store) => store.place);
  const dispatch = useDispatch();
  console.log(places);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <section>
      <Container maxWidth="1410px">
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
            <h3 className={styled.title}>
              Интересные места, где вы можете отдохнуть
            </h3>
            <Grid container spacing={{ sx: 2, sm: 3, md: 4 }}>
              {places
                ?.filter((place) => place.type === "Hostel")
                .map((post, i) => (
                  <Grid
                    item
                    className={styled.gridItem}
                    sx={{ paddingLeft: "0px" }}
                    key={i}
                  >
                    <div className={styled.item}>
                      <div
                        style={{
                          width: "300px",
                          height: "260px",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${post.image.picture})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderRadius: "10px",
                            position: "relative",
                          }}
                        >
                          <img src={like} alt="" className={styled.itemImg} />
                        </div>
                        <div className={styled.itemDescr}>
                          <span className={styled.itemTitle}>{post.name}</span>
                          <div className={styled.itemDescrRating}>
                            <img src={star} alt="" className={styled.star} />
                            <span className={styled.rating}>{post.rate}</span>
                          </div>
                        </div>
                        <div className={styled.itemLocation}>
                          <img className={styled.img} src={location} alt="" />
                          <span className={styled.city}>{post.city.name}</span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </>
        )}
      </Container>
    </section>
  );
};

export default PostPlacesHotels;
