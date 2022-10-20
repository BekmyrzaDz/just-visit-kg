import React from "react";
import "../index.css";
import yssykkyl from "../assets/images/yssyk-kuls_photos.jpg";
import dot1 from "../assets/images/Ellipse 1.svg";
import dot2 from "../assets/images/Ellipse 2.svg";
import dot3 from "../assets/images/Ellipse 3.svg";
import dot4 from "../assets/images/Ellipse 4.svg";
import dot5 from "../assets/images/Ellipse 5.svg";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const PostArticle = () => {
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
        <img
          style={{ marginBottom: "10px", borderRadius: "20px" }}
          src={yssykkyl}
          alt=""
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
        </Box>
        <Typography
          sx={{ fontSize: "20px", color: "#fff", marginBottom: "20px" }}
        >
          Лазурный Иссык-Куль - краса и гордость киргизской земли, величественно
          раскинулся между двумя хребтами - Кунгей Алатау и Терскей Алатау.
          Несколько тысяч лет назад этих гор не было. На их месте расстилалась
          ....
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            style={{
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
