import React from "react";
import "../index.css";
// MUI components
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
// Components
import PostPlaces from "../components/posts/PostPlaces/PostPlaces";
// Images
import carousel1 from "../assets/images/carousel-1.jpg";
import carousel2 from "../assets/images/carousel-2.jpg";
import carousel3 from "../assets/images/carousel-3.jpg";
import carousel4 from "../assets/images/carousel-4.jpg";
import carousel5 from "../assets/images/carousel-5.jpg";

const Places = () => {
  const dataPlaces = {
    dataTours: [
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
    ],
  };

  return (
    <>
      <Box sx={{ marginTop: "105px" }}>
        <Box
          sx={{
            position: "absolute",
            right: "119px",
            top: "210px",
            width: "241px",
            background: "var(--light-brown)",
            padding: "5px 30px",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Martel Sans",
              color: "var(--black)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            Статьи,которые вы хотите видеть
          </Typography>
          <Box>
            <FormGroup>
              <FormControlLabel
                sx={{
                  color: "var(--black)",
                  "&.MuiFormControlLabel-label": {
                    color: "var(--black)",
                  },
                }}
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="Горнолыжие"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="трекинг"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="водопады"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="каньоны"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="озера"
              />
            </FormGroup>
          </Box>
        </Box>
      </Box>
      <PostPlaces />
    </>
  );
};

export default Places;
