import { useState } from "react";
import logo from "../../assets/images/logo-justvisit.svg";
import {
    AppBar,
    Box, Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton,
    MenuItem, TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {Container} from "@mui/system";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import Authorization from "../Authorization/Authorization";
import "./Header.css"
import {useSelector} from "react-redux";

const ButtonComponent = styled(NavLink)(() => ({
    fontFamily: "Oswald",
    borderRadius: "20px",
    border: "1px solid #000",
    fontSize: "20px",
    padding: "8px 14px",
    lineHeight: "24px",
    color: "#000",
    background: "#D8AD83",
    textDecoration: "none",
}));


const TypographyComponent = styled(Typography)(() => ({
    "&:hover": {
        borderBottom: "1px solid #D8AD83",
    },
}));

const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none"
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const { profile } = useSelector(state => state.store);
    console.log(profile);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static" sx={{background: "#1E2431"}}>
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
                            <Tooltip title="logo">
                                <IconButton>
                                    <img src={logo} alt=""/>
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
                        <MenuItem sx={{marginRight: "58px"}}>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                Главная
                            </TypographyComponent>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "58px"}}>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                Интересные места
                            </TypographyComponent>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "58px"}}>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                Блоги пользователей
                            </TypographyComponent>
                        </MenuItem>
                        <MenuItem>
                            <TypographyComponent
                                sx={{
                                    fontFamily: "Oswald",
                                    fontWeight: 400,
                                    fontSize: 18,
                                    lineHeight: "32.83px",
                                }}
                                textAlign="center"
                            >
                                <Link
                                    to="/registration"
                                    style={linkStyle}
                                >
                                    Зарегистрироваться
                                </Link>
                            </TypographyComponent>
                        </MenuItem>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <ButtonComponent variant="contained" onClick={handleClickOpen}>
                            Войти
                        </ButtonComponent>
                    </Box>
                </Box>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{sx: {
                    background: "transparent",
                    boxShadow: "none",
                    width: "41,6vw",
                    padding: "0"
                }}}
            >
                <DialogContent sx={{
                    width: "41,6vw",
                    padding: "0"
                }}
                >
                    <Authorization/>
                </DialogContent>
            </Dialog>
        </AppBar>
    );
};

export default Header;
