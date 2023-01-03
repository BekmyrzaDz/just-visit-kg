// modules
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// MUI components
import { CircularProgress, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
// Styles
import styled from "./PostPlacesTours.module.scss";
// Images
import like from "../../../../assets/images/like.svg";
// Components
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
import Filter from "../Filter/Filter";
import { fetchTours } from "../../../../redux/features/tour/tourAction";
// Context
import { Context } from "../PostPlaces";
import { Link } from "react-router-dom";

const PostPlacesTours = () => {
  const props = useContext(Context);

  const { actual, popular, interestsPlaces } =
    props.Context._currentValue2.data.toursData;

  const { tours, isLoading } = useSelector((store) => store.tour);
  const dispatch = useDispatch();
  // console.log(tours);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const actualFilter = (toursData) => {
    return toursData.filter((tour) => tour.status === "Actual");
  };

  const popularFilter = (toursData) => {
    return toursData.filter((tour) => tour.status === "Popular");
  };

  return (
    <>
      {/* <Filter /> */}
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
          <section>
            <Container maxWidth="1240px">
              <h3 className={`${styled.title} ${styled.margin}`}>Актуально</h3>
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
                <ImageCarousel data={actualFilter(tours)} />
              )}
            </Container>
          </section>
          <section>
            <Container maxWidth="1240px">
              <h3 className={`${styled.title} ${styled.margin}`}>Популярно</h3>
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
                <ImageCarousel data={popularFilter(tours)} />
              )}
            </Container>
          </section>
          <section>
            <Container
              maxWidth="1225px"
              sx={{
                nargin: "0 auto",
              }}
            >
              <h3 className={styled.title}>Интересные места:</h3>
              <Grid container spacing={{ sx: 2, sm: 6, md: 9 }}>
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
                    {tours.map((post, i) => (
                      <Grid item key={i}>
                        <div
                          style={{
                            width: "233px",
                            height: "233px",
                            backgroundImage: `url(${post.image[1].picture})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderRadius: "5px",
                            display: "flex",
                            flexDirection: "column",
                            justifyItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "5px",
                          }}
                        >
                          <div className={styled.itemTop}>
                            <span className={styled.itemTitle}>
                              {post.name.length > 13
                                ? post.name.slice(0, 13) + "..."
                                : post.name}
                            </span>
                            <img
                              src={like}
                              alt=""
                              className={styled.itemIcon}
                            />
                          </div>
                          <div className={styled.itemButtom}>
                            <Link className={styled.button}>Подробнее</Link>
                          </div>
                        </div>
                      </Grid>
                    ))}
                  </>
                )}
              </Grid>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default PostPlacesTours;
