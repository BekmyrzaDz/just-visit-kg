import React from "react";
import "../index.css";
import issyKyl1 from "../assets/images/issyk-kul-1.jpg";
import issyKyl2 from "../assets/images/issyk-kul-2.jpg";
import issyKyl3 from "../assets/images/issyk-kul-3.jpg";
import issyKyl4 from "../assets/images/issyk-kul-4.jpg";
import issyKyl5 from "../assets/images/issyk-kul-5.jpg";
import dot1 from "../assets/images/Ellipse 1.svg";
import dot2 from "../assets/images/Ellipse 2.svg";
import dot3 from "../assets/images/Ellipse 3.svg";
import dot4 from "../assets/images/Ellipse 4.svg";
import dot5 from "../assets/images/Ellipse 5.svg";
import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const PostArticle = () => {
  const slides = [
    { url: issyKyl1, title: "Yssyk-Kyl" },
    { url: issyKyl2, title: "Yssyk-Kyl" },
    { url: issyKyl3, title: "Yssyk-Kyl" },
    { url: issyKyl4, title: "Yssyk-Kyl" },
    { url: issyKyl5, title: "Yssyk-Kyl" },
  ];

  const containerStyles = {
    width: "592px",
    height: "280px",
    marginBottom: "35px",
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginBottom: "17px" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Oswald",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "37.05px",
            color: "var(--white)",
            marginBottom: "20px",
          }}
        >
          Почему любят Ыссык-куль?
        </Typography>
        <Box sx={containerStyles}>
          <ImageSlider slides={slides} />
        </Box>
        {/* <img
          style={{ marginBottom: "10px", borderRadius: "20px" }}
          src={yssykkyl}
          alt=""
        /> */}
        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "80px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img sx={{ width: "10px", height: "10px" }} src={dot1} alt="" />
            <img sx={{ width: "10px", height: "10px" }} src={dot2} alt="" />
            <img sx={{ width: "10px", height: "10px" }} src={dot3} alt="" />
            <img sx={{ width: "10px", height: "10px" }} src={dot4} alt="" />
            <img sx={{ width: "10px", height: "10px" }} src={dot5} alt="" />
          </Box>
        </Box> */}
        <Typography
          sx={{
            fontFamily: "Matrial Sans",
            fontWeight: "400",
            fontSize: "20px",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Лазурный Иссык-Куль - краса и гордость киргизской земли, величественно
          раскинулся между двумя хребтами - Кунгей Алатау и Терскей Алатау.
          Несколько тысяч лет назад этих гор не было. На их месте расстилалась
          ....
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            to="/articles"
            style={{
              fontFamily: "Material Sans",
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
    </>
  );
};

export default PostArticle;
