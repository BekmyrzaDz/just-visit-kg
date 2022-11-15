import React from "react";
// Styles
import "../../../index.css";
import styled from "./PostPlaces.module.scss";
// MUI components
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
// Router components
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
// Components
import ImageSlider from "../ImageSlider/ImageSlider";

const PostPlaces = () => {
  console.log(styled);
  const setActive = ({ isActive }) => (isActive ? styled.active : styled.link);

  const containerStyles = {
    width: "592px",
    height: "280px",
    marginBottom: "35px",
  };

  return (
    <>
      {/* {dataPlaces.map((post) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "42px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Oswald",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "37.05px",
              color: "#FCEEE3",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </Typography>
          <Box sx={containerStyles}>
            <ImageSlider slides={post.images} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Matrial Sans",
              fontWeight: "400",
              fontSize: "20px",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            {post.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to="/lifehacks"
              style={{
                fontFamily: "Matrial Sans",
                fontWeight: "400",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "20px",
                background: "var(--light-brown)",
                color: "var(--black)",
                fontSize: "16px",
              }}
            >
              Развернуть
            </Link>
          </Box>
        </Box>
      ))} */}
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
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default PostPlaces;
