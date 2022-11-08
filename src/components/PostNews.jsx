import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const PostNews = ({ data }) => {
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
              color: "#FCEEE3",
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
            {post.descroption}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
      ))}
    </>
  );
};

export default PostNews;
