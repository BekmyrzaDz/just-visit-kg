// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "../PostPlaces/PostPlacesTours/PostPlacesTours.module.scss";
// React components
import React, { Component } from "react";
import Slider from "react-slick";
// Images
import like from "../../../assets/images/like.svg";
import carousel1 from "../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../assets/images/carousel-3.jpg";
import carousel4 from "../../../assets/images/carousel-4.jpg";
import carousel5 from "../../../assets/images/carousel-5.jpg";

import { Box } from "@mui/material";

export default class Responsive extends Component {
  render() {
    var settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Slider {...settings}>
          {/* <div>
            <Box
              sx={{
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
            </Box>
          </div>
          <div>
            <div className={styled.item}>
              <div className={styled.itemTop}>
                <span className={styled.itemTitle}>Ущелье Чон-Кемин</span>
                <img src={like} alt="" className={styled.itemIcon} />
              </div>
              <div className={styled.itemButtom}>
                <button className={styled.button}>Подробнее</button>
              </div>
            </div>
          </div>
          <div>
            <div className={styled.item}>
              <div className={styled.itemTop}>
                <span className={styled.itemTitle}>Ущелье Чункурчак</span>
                <img src={like} alt="" className={styled.itemIcon} />
              </div>
              <div className={styled.itemButtom}>
                <button className={styled.button}>Подробнее</button>
              </div>
            </div>
          </div>
          <div>
            <div className={styled.item}>
              <div className={styled.itemTop}>
                <span className={styled.itemTitle}>Ущелье Кегети</span>
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
                background: "url(../../../../assets/images/carousel-1.jpg)",
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
                <span className={styled.itemTitle}>Кель-Суу</span>
                <img src={like} alt="" className={styled.itemIcon} />
              </div>
              <div className={styled.itemButtom}>
                <button className={styled.button}>Подробнее</button>
              </div>
            </div>
          </div> */}
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

          <div>
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(${carousel3})`,
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
                backgroundImage: `url(${carousel4})`,
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
                backgroundImage: `url(${carousel5})`,
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

          <div>
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(${carousel3})`,
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
                backgroundImage: `url(${carousel4})`,
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
                backgroundImage: `url(${carousel5})`,
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
        </Slider>
      </div>
    );
  }
}
