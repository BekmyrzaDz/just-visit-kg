// modules
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// mui
import { CircularProgress, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// styles
import styled from "./PostBlog.module.scss";
// router
import { Link } from "react-router-dom";
// components
import ImageSlider from "../ImageSlider/ImageSlider";
// import { getBlogs, getTrevelers } from "../../../api/api";
import { getBlogs, getTrevelers } from "../../../services/blogService";
import {
  fetchBlogComments,
  fetchBlogs,
  fetchTrevelers,
} from "../../../redux/features/blog/blogAction";
// images
import avatar from "../../../assets/images/avatar-1.svg";
import userIcon from "../../../assets/images/user-default-icon.png";
import emptyImg from "../../../assets/images/empty-image.webp";

const PostBlog = ({ blogData }) => {
  const dispatch = useDispatch();
  const { blogs, isLoading } = useSelector((state) => state.blog);
  console.log(blogs);

  const images = [
    { picture: emptyImg },
    { picture: emptyImg },
    { picture: emptyImg },
    { picture: emptyImg },
    { picture: emptyImg },
  ];

  const containerStyles = {
    width: "504px",
    height: "280px",
    marginBottom: "35px",
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      {/* {blogs.error && <h2>An error occered: {blogs.error}</h2>} */}
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
          {blogs?.map((post, i) => (
            <div className={styled.blog} key={i}>
              <Container maxWidth="1240px">
                <div className={styled.blogInner}>
                  <Box className={styled.blogLeft}>
                    <Box className={styled.author} key={i}>
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          background: `url(${
                            post.user.image ? post.user.image : userIcon
                          })`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          marginBottom: "15px",
                        }}
                      ></Box>
                      <Box>
                        <span className={styled.name}>
                          {post.user.first_name} {post.user.last_name}
                        </span>
                        <span className={styled.date}>{post.created}</span>
                      </Box>
                    </Box>
                    <Typography variant="h2" className={styled.title}>
                      {post.title}
                    </Typography>
                    <Box key={i}>
                      {post.text?.length > 330 ? (
                        <Box>
                          <Box>
                            <Typography className={styled.description}>
                              {post.text.slice(0, 330) + `...`}
                            </Typography>
                          </Box>
                          <Box>
                            <Link
                              to="/news"
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
                      ) : (
                        <Box>
                          <Typography className={styled.description} key={i}>
                            {post.text}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box className={styled.blogRight}>
                    <Box sx={containerStyles}>
                      <ImageSlider slides={post.image || images} />
                    </Box>
                  </Box>
                </div>
              </Container>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default PostBlog;
