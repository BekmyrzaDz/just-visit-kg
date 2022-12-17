import React, { useContext } from "react";
// MUI components
import { Grid } from "@mui/material";
// Styles
import styled from "./PostPlacesTours.module.scss";
// Images
import like from "../../../../assets/images/like.svg";
// Components
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
import Filter from "../Filter/Filter";
// Context
import { Context } from "../PostPlaces";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

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
        <Container
          maxWidth="1225px"
          sx={{
            nargin: "0 auto",
          }}
        >
          <h3 className={styled.title}>Интересные места:</h3>
          <Grid container spacing={{ sx: 2, sm: 6, md: 9 }}>
            {interestsPlaces.map((post, i) => (
              <Grid item key={i}>
                <div
                  style={{
                    width: "233px",
                    height: "233px",
                    backgroundImage: `url(${post.cover})`,
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
                    <span className={styled.itemTitle}>{post.title}</span>
                    <img src={like} alt="" className={styled.itemIcon} />
                  </div>
                  <div className={styled.itemButtom}>
                    <Link className={styled.button}>Подробнее</Link>
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
