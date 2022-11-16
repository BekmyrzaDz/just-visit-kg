import { Grid } from "@mui/material";
import React from "react";
// styles
import styled from "./PostPlacesHotels.module.css";
import "../../../../styles/variables.scss";
// images
import hotel from "../../../../assets/images/hotel1.jpg";
import like from "../../../../assets/images/like.svg";
import star from "../../../../assets/images/star.svg";
import location from "../../../../assets/images/location.svg";

const PostPlacesHotels = () => {
  return (
    <section>
      <h3 className={styled.title}>
        Интересные места, где вы можете отдохнуть
      </h3>
      <Grid container spacing={{ sx: 2, sm: 4, md: 6 }}>
        <Grid item className={styled.gridItem}>
          <div className={styled.item}>
            <div
              style={{
                width: "300px",
                height: "260px",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "260px",
                  backgroundImage: `url(${hotel})`,
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
                <span className={styled.itemTitle}>Ambassador</span>
                <div className={styled.itemDescrRating}>
                  <img src={star} alt="" className={styled.star} />
                  <span className={styled.rating}>5,0</span>
                </div>
              </div>
              <div className={styled.itemLocation}>
                <img className={styled.img} src={location} alt="" />
                <span className={styled.city}>Бишкек</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default PostPlacesHotels;
