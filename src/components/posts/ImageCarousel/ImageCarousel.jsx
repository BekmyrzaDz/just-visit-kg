// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "../PostPlaces/PostPlacesTours/PostPlacesTours.module.scss";
// React components
import React, { Component } from "react";
import Slider from "react-slick";
// Images
import like from "../../../assets/images/like.svg";

export default class Responsive extends Component {
  // constructor(props) {
  //   super(props);
  //   this.log = this.log.bind(this);
  // }
  render() {
    const log = (props) => {
      console.log(props);
    };

    // log();
    var settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
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
          <div>
            <div className={styled.item}>
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
