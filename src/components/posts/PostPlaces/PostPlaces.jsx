import React, { createContext } from "react";
// Styles
import "../../../index.css";
import styled from "./PostPlaces.module.css";
// MUI components
import { Container } from "@mui/material";
import { Box } from "@mui/system";
// Router components
import { NavLink, useOutlet } from "react-router-dom";

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
// interest places images
import hotel1 from "../../../assets/images/hotel1.jpg";
import hotel2 from "../../../assets/images/hotel2.jpg";
import hotel3 from "../../../assets/images/hotel3.jpg";
import hotel4 from "../../../assets/images/hotel4.jpg";
import hotel5 from "../../../assets/images/hotel5.jpg";
import hotel6 from "../../../assets/images/hotel6.jpg";
import hotel7 from "../../../assets/images/hotel7.jpg";
import hotel8 from "../../../assets/images/hotel8.jpg";
import hotel9 from "../../../assets/images/hotel9.jpg";
import hotel10 from "../../../assets/images/hotel10.jpg";
import hotel11 from "../../../assets/images/hotel11.jpg";
import hotel12 from "../../../assets/images/hotel12.jpg";

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
  hotelsData: [
    { title: "Orion Hotel", img: hotel1, rating: "5,0", location: "Бишкек" },
    { title: "Sheraton", img: hotel2, rating: "4,5", location: "Бишкек" },
    { title: "Novotel", img: hotel3, rating: "5,0", location: "Бишкек" },
    { title: "Jannat Regency", img: hotel4, rating: "4,5", location: "Бишкек" },
    { title: "Ambassador", img: hotel5, rating: "4,5", location: "Бишкек" },
    {
      title: "Ramada by Wyndham",
      img: hotel6,
      rating: "4,5",
      location: "Бишкек",
    },
    { title: "City Hotel", img: hotel7, rating: "4,5", location: "Бишкек" },
    { title: "Onyx Hotel", img: hotel8, rating: "4,0", location: "Бишкек" },
    { title: "Soluxe Hotel", img: hotel9, rating: "4,5", location: "Бишкек" },
    { title: "Madison Ave", img: hotel10, rating: "4,5", location: "Бишкек" },
    {
      title: "Silk Road lodge",
      img: hotel11,
      rating: "4,0",
      location: "Бишкек",
    },
    { title: "Grand Hotel", img: hotel12, rating: "4,5", location: "Бишкек" },
  ],
  resataurantsData: [],
};

export const Context = createContext({ data });

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
          <Context.Provider value={{ Context }}>{outlet}</Context.Provider>
        </Box>
      </Box>
    </>
  );
};
export default PostPlaces;
