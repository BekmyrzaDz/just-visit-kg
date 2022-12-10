// styles
import styled from "./ReviewsItem.module.css";
// context
import { useContext } from "react";
import { Context } from "../../../PostPlaces";
// mui
import { Box, Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const ReviewsItem = () => {
  const props = useContext(Context);

  const { actual } = props.Context._currentValue2.data.toursData;
  console.log(actual);

  return (
    <>
      {actual
        .filter((post) => post.id === 1)
        .map((post) => (
          <Box key={post.id}>
            <Box>
              <h3 className={styled.title}>{post.reviewsData.title}</h3>
            </Box>
            <Box>
              {post.reviewsData.reviews.map((item, i) => (
                <Box className={styled.parent} key={i}>
                  <Container width="736px">
                    <Box className={styled.parentInner}>
                      <Grid
                        sx={{ alignItems: "center" }}
                        container
                        spacing={2}
                        columns={16}
                      >
                        <Grid item xs={6}>
                          <Box className={styled.user}>
                            <img
                              className={styled.userImg}
                              src={item.user.img}
                              alt=""
                            />
                            <span className={styled.userNickName}>
                              {item.user.nickName}
                            </span>
                            <Box className={styled.rating}>
                              <img
                                className={styled.ratingStar}
                                src={item.user.star}
                                alt=""
                              />
                              <Typography className={styled.ratingNumber}>
                                {item.user.rating}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={10}>
                          <Box className={styled.review}>
                            <Typography className={styled.reviewText}>
                              {item.review}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
    </>
  );
};

export default ReviewsItem;
