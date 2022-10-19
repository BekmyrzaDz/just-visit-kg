import { Typography } from "@mui/material";
import React from "react";
import yssykkyl from "../assets/images/bishkek.jpg";
import dot1 from "../assets/images/Ellipse 1.svg";
import dot2 from "../assets/images/Ellipse 2.svg";
import dot3 from "../assets/images/Ellipse 3.svg";
import dot4 from "../assets/images/Ellipse 4.svg";
import dot5 from "../assets/images/Ellipse 5.svg";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const PostNews = () => {
  return (
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
          color: "#FCEEE3",
          marginBottom: "20px",
        }}
      >
        В Бишкеке открылся новый парк дружбы между Кыргызстаном и Азербайджаном
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
      <Typography sx={{ fontSize: "20px", color: "#fff" }}>
        Сегодня, 11 октября, в рамках госвизита Ильхама Алиева в Кыргызстан
        состоялось открытие Кыргызско-азербайджанского парка дружбы. Как
        сообщает администрация президента, в церемонии открытия приняли участие
        президент Кыргызстана....
      </Typography>
      <Box>
        <Link>Развернуть</Link>
      </Box>
    </Box>
  );
};

export default PostNews;
