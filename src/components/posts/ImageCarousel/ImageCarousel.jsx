// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "../PostPlaces/PostPlacesTours/PostPlacesTours.module.scss";
// React components
import React, { Component } from "react";
import Slider from "react-slick";
// Images
import like from "../../../assets/images/like.svg";
import { Link } from "react-router-dom";
export default class Responsive extends Component {
  render() {
    const posts = this.props.data;

    const id = 1;

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
          {posts.map((post, i) => (
            <div key={i}>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundImage: `url(${post.cover})`,
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
                  <Link to={`${id}`} className={styled.button}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
