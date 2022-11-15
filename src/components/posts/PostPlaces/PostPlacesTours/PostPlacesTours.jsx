import React from "react";
// MUI components
import { Grid, Typography } from "@mui/material";
// Styles
import styled from "./PostPlacesTours.module.css";
// Images
import like from "../../../../assets/images/like.svg";
// Carousel component
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

import { Context } from "../PostPlaces";

const PostPlacesTours = () => {
  const props = React.useContext(Context);
  // console.log(props);

  const { actual, popular, interestsPlaces } =
    props.Context._currentValue2.data.toursData;
  // console.log(actual);

  return (
    <>
      <section>
        <h3 className={styled.title}>Актуально</h3>
        <ImageCarousel data={actual} />
      </section>
      <section>
        <h3 className={styled.title}>Популярно</h3>
        <ImageCarousel data={popular} />
      </section>
      <section>
        <h3 className={styled.title}>Интересные места:</h3>
        <Grid container spacing={{ sx: 2, sm: 4, md: 6 }}>
          {interestsPlaces.map((post) => (
            <Grid item>
              <div
                style={{
                  width: "233px",
                  height: "233px",
                  backgroundImage: `url(${post.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingTop: "5px",
                }}
              >
                <div className={styled.itemTop}>
                  <span className={styled.itemTitle}>{post.title}</span>
                  <img src={like} alt="" className={styled.itemIcon} />
                </div>
                <div className={styled.itemButtom}>
                  <button className={styled.button}>Подробнее</button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default PostPlacesTours;
