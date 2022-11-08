import React from "react";
import "../index.css";
import issyKyl1 from "../assets/images/issyk-kul-1.jpg";
import issyKyl2 from "../assets/images/issyk-kul-2.jpg";
import issyKyl3 from "../assets/images/issyk-kul-3.jpg";
import issyKyl4 from "../assets/images/issyk-kul-4.jpg";
import issyKyl5 from "../assets/images/issyk-kul-5.jpg";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const PostArticle = ({ data }) => {
  // console.log(data);

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
      {data.map((post) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "17px",
          }}
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
      ))}
    </>
  );
};

export default PostArticle;
