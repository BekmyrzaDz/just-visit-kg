// modules
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// mui
import { CircularProgress, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// styles
import styled from "./PostBlog.module.css";
// router
import { Link } from "react-router-dom";
// components
import ImageSlider from "../ImageSlider/ImageSlider";
// import { getBlogs, getTrevelers } from "../../../api/api";
import { getBlogs, getTrevelers } from "../../../services/blogService";
import {
  fetchBlogCommentById,
  fetchBlogComments,
  fetchBlogs,
  fetchTrevelerById,
  fetchTrevelers,
} from "../../../redux/features/blog/blogAction";
// images
import avatar from "../../../assets/images/avatar-1.svg";
import userIcon from "../../../assets/images/user-default-icon.png";

const PostBlog = ({ blogData }) => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  console.log(blogs);

  const containerStyles = {
    width: "504px",
    height: "280px",
    marginBottom: "35px",
  };

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchBlogComments());
    dispatch(fetchTrevelers());
  }, [dispatch]);

  return (
    <>
      {/* {blogs.isLoading ? <h2>Loading...</h2> : false}
      {blogs.error && <h2>An error occered: {blogs.error}</h2>} */}
      {/* {blogData.map((post, i) => (
          <div className={styled.blog} key={i}>
            <Container maxWidth="1240px">
              <div className={styled.blogInner}>
                <Box className={styled.blogLeft}>
                  <Box className={styled.author}>
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: `url(${post.author.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        marginBottom: "15px",
                      }}
                    ></Box>
                    <Box>
                      <span className={styled.name}>
                        {post.author.firstName} {post.author.lastName}
                      </span>
                      <span className={styled.date}>{post.author.date}</span>
                    </Box>
                  </Box>
                  <Typography variant="h2" className={styled.title}>
                    {post.title}
                  </Typography>
                  <Typography className={styled.description}>
                    {post.description}
                  </Typography>
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
                <Box className={styled.blogRight}>
                  <Box sx={containerStyles}>
                    <ImageSlider slides={post.images} />
                  </Box>
                </Box>
              </div>
            </Container>
          </div>
        ))} */}
      {blogs.blog?.map((post, i) => (
        <div className={styled.blog} key={i}>
          <Container maxWidth="1240px">
            <div className={styled.blogInner}>
              <Box className={styled.blogLeft}>
                {blogs.trevelers
                  ?.filter((item) => item.id === post.user)
                  .map((treveler, i) => (
                    <Box className={styled.author} key={i}>
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          background: `url(${
                            treveler.image ? treveler.image : userIcon
                          })`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          marginBottom: "15px",
                        }}
                      ></Box>
                      <Box>
                        <span className={styled.name}>
                          {treveler.first_name} {treveler.last_name}
                        </span>
                        <span className={styled.date}>{post.created}</span>
                      </Box>
                    </Box>
                  ))}
                <Typography variant="h2" className={styled.title}>
                  {post.title}
                </Typography>
                {blogs.comments
                  ?.filter((item) => item.blog === post.id)
                  .map((comment, i) => (
                    <Box key={i}>
                      {comment.text.length < 330 ? (
                        <Box>
                          <Box>
                            <Typography className={styled.description}>
                              {comment.text.slice(0, 330) + `...`}
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
                            {comment.text}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  ))}
              </Box>
              <Box className={styled.blogRight}>
                <Box sx={containerStyles}>
                  <ImageSlider slides={blogData[1].images} />
                </Box>
              </Box>
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};
export default PostBlog;
