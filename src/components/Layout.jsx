import React from "react";
import styles from "./Layout.module.scss";
import { Button, Container, Typography } from "@mui/material";
import Header from "./Header";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/system";

const ButtonCompoent = styled(Link)(() => ({
  fontFamily: "Oswald",
  borderRadius: "20px",
  border: "1px solid #A97155",
  fontSize: "20px",
  padding: "10px 26px",
  lineHeight: "24px",
  color: "#fff",
  background: "#1E2431",
  textDecoration: "none",
  // "&:hover": {
  //   background: "#D8AD83",
  //   color: "#000",
  //   border: "1px solid #000",
  // },
}));

const Layout = () => {
  const setActive = ({ isActive }) => (isActive ? styles.active : styles.link);

  return (
    <>
      <Header />
      <main style={{ background: "#1E2431" }}>
        <Container maxWidth="md">
          <Box sx={{ marginBottom: "50px" }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 500,
                fontSize: "60px",
                color: "var(--white)",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Информационный портал для путешествия по Кыргызстану
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "10px",
                }}
              >
                <NavLink to="/articles" className={setActive}>
                  Статьи
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "10px",
                }}
              >
                <NavLink to="/places" className={setActive}>
                  Места
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <NavLink to="/blog" className={setActive}>
                  Блог
                </NavLink>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="1240px">
          <Box sx={{ paddingBottom: "50px" }}>
            <Outlet />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Layout;
