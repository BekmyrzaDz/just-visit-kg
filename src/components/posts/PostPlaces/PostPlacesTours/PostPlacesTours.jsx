import React from "react";
// MUI components
import { Typography } from "@mui/material";
// Styles
import styled from "./PostPlacesTours.module.scss";
// Images
import like from "../../../../assets/images/like.svg";

import carousel1 from "../../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../../assets/images/carousel-3.jpg";
import carousel4 from "../../../../assets/images/carousel-4.jpg";
import carousel5 from "../../../../assets/images/carousel-5.jpg";
// Carousel component
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
import { containerClasses } from "@mui/system";

const PostPlacesTours = () => {
  const dataTours = [
    {
      title: "Поездка на Ыссык-Куль",
      img: carousel1,
    },
    {
      title: "Ущелье Чон-Кемин",
      img: carousel2,
    },
    {
      title: "Ущелье Чункурчак",
      img: carousel3,
    },
    {
      title: "Ущелье Кегети",
      img: carousel4,
    },
    {
      title: "Кель-Суу",
      img: carousel5,
    },
  ];

  return (
    <>
      <section>
        <h3 className={styled.title}>Актуально</h3>
        {/* <div className={styled.container}>
          <div>
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(${carousel1})`,
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
                <span className={styled.itemTitle}>Поездка на Ыссык-Куль</span>
                <img src={like} alt="" className={styled.itemIcon} />
              </div>
              <div className={styled.itemButtom}>
                <button className={styled.button}>Подробнее</button>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(${carousel2})`,
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
                <span className={styled.itemTitle}>Поездка на Ыссык-Куль</span>
                <img src={like} alt="" className={styled.itemIcon} />
              </div>
              <div className={styled.itemButtom}>
                <button className={styled.button}>Подробнее</button>
              </div>
            </div>
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
