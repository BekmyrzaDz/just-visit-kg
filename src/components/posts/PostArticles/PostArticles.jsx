import React from "react";
import "../../../index.css";
// import issyKyl1 from "../../assets/images/issyk-kul-1.jpg";
// import issyKyl2 from "../../assets/images/issyk-kul-2.jpg";
// import issyKyl3 from "../../assets/images/issyk-kul-3.jpg";
// import issyKyl4 from "../../assets/images/issyk-kul-4.jpg";
// import issyKyl5 from "../../assets/images/issyk-kul-5.jpg";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import { createArticles } from "../../../api";

const PostArticle = ({ data }) => {
  const containerStyles = {
    width: "592px",
    height: "280px",
    marginBottom: "35px",
  };

  const article = {
    title: "Почему любят Ыссык-куль?",
    description:
      "Лазурный Иссык-Куль - краса и гордость киргизской земли, величественно раскинулся между двумя хребтами - Кунгей Алатау и Терскей Алатау. Несколько тысяч лет назад этих Озеро Иссык",
  };

  return (
    <>
      <button onClick={() => createArticles(article)}>Click</button>
      {data.map((post, i) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "42px",
          }}
          key={i}
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
