import React from "react";
// Styles
import "../../../index.css";
import styled from "./PostPlaces.module.scss";
// MUI components
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
// Router components
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useOutlet,
} from "react-router-dom";
// Components
import ImageSlider from "../ImageSlider/ImageSlider";

// Images
// actual images
import carousel1 from "../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../assets/images/carousel-3.jpg";
import carousel4 from "../../../assets/images/carousel-4.jpg";
// popular images
import popularCarousel1 from "../../../assets/images/popular-carousel1.jpg";
import popularCarousel2 from "../../../assets/images/popular-carousel2.jpg";
import popularCarousel3 from "../../../assets/images/popular-carousel3.jpg";
import popularCarousel4 from "../../../assets/images/popular-carousel4.jpg";
// interest places images
import interestPlacesCarousel1 from "../../../assets/images/interest-places1.jpg";
import interestPlacesCarousel2 from "../../../assets/images/interest-places2.jpg";
import interestPlacesCarousel3 from "../../../assets/images/interest-places3.jpg";
import interestPlacesCarousel4 from "../../../assets/images/interest-places4.jpg";
import interestPlacesCarousel5 from "../../../assets/images/interest-places5.jpg";
import interestPlacesCarousel6 from "../../../assets/images/interest-places6.jpg";
import interestPlacesCarousel7 from "../../../assets/images/interest-places7.jpg";
import interestPlacesCarousel8 from "../../../assets/images/interest-places8.jpg";
import interestPlacesCarousel9 from "../../../assets/images/interest-places9.jpg";
import interestPlacesCarousel10 from "../../../assets/images/interest-places10.jpg";

const data = {
  toursData: {
    actual: [
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
        title: "Кель-Суу",
        img: carousel4,
      },

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
        title: "Кель-Суу",
        img: carousel4,
      },
    ],
    popular: [
      {
        title: "Ала-Арча на целый день",
        img: popularCarousel1,
      },
      {
        title: "Ущелье Чон-Кемин",
        img: popularCarousel2,
      },
      {
        title: "Ущелье Чункурчак",
        img: popularCarousel3,
      },
      {
        title: "Кель-Суу",
        img: popularCarousel4,
      },

      {
        title: "Поездка на Ыссык-Куль",
        img: popularCarousel1,
      },
      {
        title: "Ущелье Чон-Кемин",
        img: popularCarousel2,
      },
      {
        title: "Ущелье Чункурчак",
        img: popularCarousel3,
      },
      {
        title: "Кель-Суу",
        img: popularCarousel4,
      },
    ],
    interestsPlaces: [
      {
        title: "Кара-Кол",
        img: interestPlacesCarousel1,
      },
      {
        title: "Суусамырская долина",
        img: interestPlacesCarousel2,
      },
      {
        title: "Исторический музей",
        img: interestPlacesCarousel3,
      },
      {
        title: "Мавзолей Гувбез Манаса",
        img: interestPlacesCarousel4,
      },
      {
        title: "Дунганская мечеть в Караколе",
        img: interestPlacesCarousel5,
      },
      {
        title: "Башня Бурана",
        img: interestPlacesCarousel6,
      },
      {
        title: "Рух-Ордо",
        img: interestPlacesCarousel7,
      },
      {
        title: "Прекрасный Сон-Куль",
        img: interestPlacesCarousel8,
      },
      {
        title: "Ореховый лес Арстанбап",
        img: interestPlacesCarousel9,
      },
      {
        title: "Горы Тянь-Шань",
        img: interestPlacesCarousel10,
      },
    ],
  },
  hotelsData: [],
  resataurantsData: [],
};

export const Context = React.createContext({ data });

const PostPlaces = () => {
  const outlet = useOutlet();

  const setActive = ({ isActive }) => (isActive ? styled.active : styled.link);

  return (
    <>
      <Box>
        <Box className={styled.parent}>
          <Box className={styled.parentInner}>
            <NavLink to="tours" className={setActive}>
              Туры
            </NavLink>
            <NavLink to="hotels" className={setActive}>
              Отели
            </NavLink>
            <NavLink to="restaurants" className={setActive}>
              Рестораны
            </NavLink>
          </Box>
        </Box>
        <Box>
          <Container maxWidth="1240px">
            <Context.Provider value={{ Context }}>{outlet}</Context.Provider>
            {/* <Outlet /> */}
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default PostPlaces;
