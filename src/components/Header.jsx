import "./Header.css";
import logo from "../assets/images/logo-justvisit.svg";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonCompoent = styled(NavLink)(() => ({
  fontFamily: "Oswald",
  borderRadius: "20px",
  border: "1px solid #000",
  fontSize: "20px",
  padding: "8px 14px",
  lineHeight: "24px",
  color: "#000",
  background: "#D8AD83",
  textDecoration: "none",
  // "&:hover": {
  //   background: "#D8AD83",
  //   color: "#000",
  //   border: "1px solid #000",
  // },
}));

const TypographyComponent = styled(Typography)(() => ({
  "&:hover": {
    borderBottom: "1px solid #D8AD83",
  },
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#1E2431" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Link to="/">
              <Tooltip>
                <IconButton>
                  <img src={logo} alt="" />
                  {/* <Avatar src={logo} alt="" /> */}
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MenuItem sx={{ marginRight: "58px" }}>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Главная
              </TypographyComponent>
            </MenuItem>
            <MenuItem sx={{ marginRight: "58px" }}>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Интересные места
              </TypographyComponent>
            </MenuItem>
            <MenuItem sx={{ marginRight: "58px" }}>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Блоги пользователей
              </TypographyComponent>
            </MenuItem>
            <MenuItem sx={{ marginRight: "58px" }}>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Личный кабинет
              </TypographyComponent>
            </MenuItem>
            <MenuItem>
              <TypographyComponent
                sx={{
                  fonntFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Зарегистрироваться
              </TypographyComponent>
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ButtonCompoent variant="contained">Войти</ButtonCompoent>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
