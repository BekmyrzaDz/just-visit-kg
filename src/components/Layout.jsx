import React from "react";
import { Button, Container, Typography } from "@mui/material";
import Header from "./Header";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/system";

const ButtonCompoent = styled(Button)(() => ({
  fontFamily: "Oswald",
  color: "#000",
  background: "#1E2431",
  borderRadius: "20px",
  border: "1px solid #A97155",
  fontSize: "20px",
  lineHeight: "24px",
  "&:hover": {
    backgroundColor: "none`",
    color: "#000",
    border: "1px solid #000",
  },
}));

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ background: "#1E2431" }}>
        <Container maxWidth="md">
          <Box sx={{ marginBottom: "50px" }}>
            <Typography
              sx={{
                fontFamily: "Oswald",
                fontSize: "60px",
                fontWeight: 500,
                color: "#FCEEE3",
                textAlign: "center",
                marginBottom: "35px",
              }}
              variant="h1"
              component="h1"
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
                <NavLink to="/articles" sx={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      background: "none",
                      borderRadius: 20,
                      textTransform: "none",
                      textDecoration: "none",
                      border: "1px solid #A97155",
                    }}
                    variant="contained"
                  >
                    Статьи
                  </Button>
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "10px",
                }}
              >
                <NavLink to="/lifehacks">
                  <ButtonCompoent
                    sx={{
                      background: "none",
                      borderRadius: 20,
                      textTransform: "none",
                      border: "1px solid #A97155",
                    }}
                    variant="contained"
                  >
                    Лайфхаки
                  </ButtonCompoent>
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <NavLink to="/news">
                  <ButtonCompoent
                    sx={{
                      background: "none",
                      borderRadius: 20,
                      textTransform: "none",
                      border: "1px solid #A97155",
                    }}
                    variant="contained"
                  >
                    Новости
                  </ButtonCompoent>
                </NavLink>
              </Box>
            </Box>
          </Box>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
