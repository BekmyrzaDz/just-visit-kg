import React from "react";
import styles from "./Layout.module.css";
import { Container, Typography } from "@mui/material";
import Header from "./Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { Box } from "@mui/system";

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
        {/* <Container maxWidth="1240px"> */}
        <Box sx={{ paddingBottom: "50px" }}>
          <Outlet />
        </Box>
        {/* </Container> */}
      </main>
    </>
  );
};

export default Layout;
