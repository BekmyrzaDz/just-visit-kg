import "./Header.css";
import logo from "../assets/images/logo.svg";
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
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonCompoent = styled(Button)(() => ({
  fontFamily: "Oswald",
  color: "#000",
  background: "none",
  borderRadius: "20px",
  border: "1px solid #000000",
  fontSize: "20px",
  lineHeight: "24px",
  // "&:hover": {
  //   background: "#1E2431",
  //   color: "#fff",
  //   border: "1px solid #A97155",
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
        {/* <Toolbar> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Tooltip>
                <IconButton>
                  {/* <img
                    style={{ width: "100px", height: "100px" }}
                    src={logo}
                    alt=""
                  /> */}
                  <Avatar sx={{}} src={logo} alt="" />
                </IconButton>
              </Tooltip>
            </Link>
            <Typography
              variant="h5"
              component="a"
              style={{
                fontFamily: "Oswald",
                fontWeight: 400,
                fontSize: 20,
                color: "#D8AD83",
              }}
            >
              JustVisit.kg
            </Typography>
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
                  fontSize: 18,
                  lineHeight: "32.83px",
                }}
                textAlign="center"
              >
                Зарегистрироваться
              </TypographyComponent>
            </MenuItem>
            {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                fontFamily: "Oswald",
                color: "#000",
                background: "#D8AD83",
                borderRadius: "20px",
                border: "1px solid #000000",
                fontSize: 20,
                textTransform: "none",
              }}
              variant="contained"
            >
              Войти
            </Button>
          </Box>
        </Box>
        {/* </Toolbar> */}
      </Container>
    </AppBar>
  );
};

export default Header;
