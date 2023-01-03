// modules
import React, { useId } from "react";
import Slider from "react-slick";
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "../PostPlaces/PostPlacesTours/PostPlacesTours.module.scss";
// images
import like from "../../../assets/images/like.svg";
import { Link } from "react-router-dom";

const ImageCarousel = ({ data }) => {
  const id = useId();
  console.log(data);

  let settings = {
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
        {data?.map((post, i) => (
          <div key={id}>
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(${post.image[1].picture})`,
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
                <span className={styled.itemTitle}>
                  {post.name.length > 18
                    ? post.name.slice(0, 18) + "..."
                    : post.name}
                </span>
                <img src={like} alt="" className={styled.itemIcon} />
              </div>
              <div className={styled.itemButtom}>
                <Link to={`${post.id}`} className={styled.button}>
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
