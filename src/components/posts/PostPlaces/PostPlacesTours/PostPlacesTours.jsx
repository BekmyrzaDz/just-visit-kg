import React from "react";
// MUI components
import { Typography } from "@mui/material";
// Styles
import styled from "./PostPlacesTours.module.scss";
// Images
import like from "../../../../assets/images/like.svg";
// Carousel component
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

const PostPlacesTours = (data) => {
  console.log(data);
  return (
    <>
      <section>
        <h3 className={styled.title}>Актуально</h3>
        {/* <div className={styled.item}>
        <div className={styled.itemTop}>
          <span className={styled.itemTitle}>Поездка на Ыссык-Куль</span>
          <img src={like} alt="" className={styled.itemIcon} />
        </div>
        <div className={styled.itemButtom}>
          <button className={styled.button}>Подробнее</button>
        </div>
      </div> */}
        <ImageCarousel />
      </section>
      <section>
        <h3 className={styled.title}>Популярно</h3>
        {/* <div className={styled.item}>
        <div className={styled.itemTop}>
          <span className={styled.itemTitle}>Поездка на Ыссык-Куль</span>
          <img src={like} alt="" className={styled.itemIcon} />
        </div>
        <div className={styled.itemButtom}>
          <button className={styled.button}>Подробнее</button>
        </div>
      </div> */}
        <ImageCarousel />
      </section>
      <section>
        <h3 className={styled.title}>Интересные места:</h3>
        <div className={styled.item}>
          <div className={styled.itemTop}>
            <span className={styled.itemTitle}>Поездка на Ыссык-Куль</span>
            <img src={like} alt="" className={styled.itemIcon} />
          </div>
          <div className={styled.itemButtom}>
            <button className={styled.button}>Подробнее</button>
          </div>
        </div>
        {/* <ImageCarousel /> */}
      </section>
    </>
  );
};

export default PostPlacesTours;
