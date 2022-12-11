// mui
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// styles
import styled from "./PostBlog.module.css";
// router
import { Link } from "react-router-dom";
// components
import ImageSlider from "../ImageSlider/ImageSlider";
import { getBlogs, getTrevelers } from "../../../api/api";
import { useEffect, useState } from "react";

const PostBlog = ({ blogData }) => {
  const [blogState, setBlogState] = useState();
  const [trevelersState, setTrevelersState] = useState();
  const containerStyles = {
    width: "504px",
    height: "280px",
    marginBottom: "35px",
  };

  const blog = {
    data: getBlogs(),
  };
  const trevelers = {
    data: getTrevelers(),
  };

  useEffect(() => {
    setBlogState(blog);
    setTrevelersState(trevelers);
  }, []);

  // console.log(getBlogs());
  // console.log(getTrevelers());
  // console.log(blogState.data);
  // console.log(trevelersState);
  console.log(blog.data);
  console.log(trevelers.data);

  return (
    <>
      {blogData.map((post, i) => (
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
      ))}
    </>
  );
};
export default PostBlog;
