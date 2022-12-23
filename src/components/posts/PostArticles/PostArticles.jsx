// modules
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import "../../../index.css";
import styled from "./PostArticles.module.scss";
// mui
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
// router
import { Link } from "react-router-dom";
// components
import ImageSlider from "../ImageSlider/ImageSlider";
import { fetchArticles } from "../../../redux/features/article/articleAction";
// images
import emptyImg from "../../../assets/images/empty-image.webp";

const PostArticle = ({ data }) => {
  const { articles, isLoading } = useSelector((store) => store.article);
  const dispatch = useDispatch();
  const [isFullText, setIsFullText] = useState(false);
  // console.log(articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const images = [
    { picture: emptyImg },
    { picture: emptyImg },
    { picture: emptyImg },
    { picture: emptyImg },
    { picture: emptyImg },
  ];

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

  const setFullText = () => {
    setIsFullText(!isFullText);
  };

  return (
    <>
      {/* <button onClick={() => createArticle(article)}>Click</button> */}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {articles.map((post, i) => (
            <Box className={styled.article} key={i}>
              <Typography variant="h2" className={styled.title}>
                {post.title}
              </Typography>
              <Box sx={containerStyles}>
                <ImageSlider slides={post.image || images} />
              </Box>
              {post.description?.length > 330 ? (
                <Box>
                  <Box>
                    <Typography className={styled.description}>
                      {isFullText
                        ? post.description
                        : post.description.slice(0, 330) + `...`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      onClick={setFullText}
                      id="myBtn"
                      className={styled.button}
                    >
                      {isFullText ? "Скрыть" : "Развернуть"}
                    </button>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Typography className={styled.description}>
                    {post.description}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default PostArticle;
