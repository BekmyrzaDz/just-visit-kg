import React, { useContext } from "react";
// MUI components
import { Grid } from "@mui/material";
// Styles
import styled from "./PostPlacesTours.module.css";
// Images
import like from "../../../../assets/images/like.svg";
// Components
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
import Filter from "../Filter/Filter";
// Context
import { Context } from "../PostPlaces";
import { Container } from "@mui/system";

const PostPlacesTours = () => {
  const props = useContext(Context);

  const { actual, popular, interestsPlaces } =
    props.Context._currentValue2.data.toursData;

  return (
    <>
      <Filter />
      <section>
        <Container maxWidth="1240px">
          <h3 className={`${styled.title} ${styled.margin}`}>Актуально</h3>
          <ImageCarousel data={actual} />
        </Container>
      </section>
      <section>
        <Container maxWidth="1240px">
          <h3 className={`${styled.title} ${styled.margin}`}>Популярно</h3>
          <ImageCarousel data={popular} />
        </Container>
      </section>
      <section>
        <Container maxWidth="1240px">
          <h3 className={styled.title}>Интересные места:</h3>
          <Grid container spacing={{ sx: 2, sm: 4, md: 6 }}>
            {interestsPlaces.map((post, i) => (
              <Grid item key={i}>
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
        </Container>
      </section>
    </>
  );
};

export default PostPlacesTours;
