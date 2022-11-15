import React, {useState} from "react";
// Styles
import "../../index.css";
import styled from "styled-components";
// Images
import logo from "../../assets/images/logo-justvisit.svg";
import search from "../../assets/images/search.svg";
// MUI components
import {AppBar, Box, Dialog, DialogContent, IconButton, Input, MenuItem, Tooltip, Typography,} from "@mui/material";
import {Container} from "@mui/system";
// React-router-dom components
import {Link, NavLink} from "react-router-dom";
// Components
import Select from "./Select/Select";
import Authorization from "../Authorization/Authorization";
import {useSelector} from "react-redux";

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
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const {profile} = useSelector(state => state.store);
    console.log(profile);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static" sx={{background: "#1E2431"}}>
            <Container maxWidth="1240px">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Link to="/">
                            <Tooltip title="Main-Logo">
                                <IconButton>
                                    <img src={logo} alt=""/>
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
                        <MenuItem sx={{marginRight: "50px"}}>
                            <Typography
                                sx={{
                                    fontFamily: "Martel Sans",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "32.83px",
                                    borderBottom: "1px solid transparent",
                                    "&:hover": {
                                        borderBottom: "1px solid #D8AD83",
                                        color: "#D8AD83",
                                        transitionDelay: "0.2s",
                                    },
                                }}
                            >
                                Главная
                            </Typography>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "50px"}}>
                            <Typography
                                sx={{
                                    fontFamily: "Martel Sans",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "32.83px",
                                    borderBottom: "1px solid transparent",
                                    "&:hover": {
                                        borderBottom: "1px solid #D8AD83",
                                        color: "#D8AD83",
                                        transitionDelay: "0.2s",
                                    },
                                }}
                            >
                                Интересные места
                            </Typography>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "50px"}}>
                            <Typography
                                sx={{
                                    fontFamily: "Martel Sans",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "32.83px",
                                    borderBottom: "1px solid transparent",
                                    "&:hover": {
                                        borderBottom: "1px solid #D8AD83",
                                        color: "#D8AD83",
                                        transitionDelay: "0.2s",
                                    },
                                }}
                            >
                                Блоги пользователей
                            </Typography>
                        </MenuItem>
                        <MenuItem sx={{marginRight: "50px"}}>
                            <Typography
                                sx={{
                                    fontFamily: "Martel Sans",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "32.83px",
                                    borderBottom: "1px solid transparent",
                                    "&:hover": {
                                        borderBottom: "1px solid #D8AD83",
                                        color: "#D8AD83",
                                        transitionDelay: "0.2s",
                                    },
                                }}
                            >
                                <Link to="/registration">
                                    Личный кабинет
                                </Link>
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Select/>
                        </MenuItem>
                    </Box>
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
                                justifyContent: "flex-end",
                            }}
                        >
                            <ButtonCompoent variant="contained" onClick={handleClickOpen}>Войти</ButtonCompoent>
                        </Box>
                        <Box
                            sx={{
                                background: "var(--light-brown)",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "20px",
                                marginLeft: "10px",
                            }}
                        >
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                                disableUnderline={true}
                                placeholder="о чем хотите узнать?"
                                sx={{
                                    fontFamily: "Material Sans",
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "32.83px",
                                    width: "198px",
                                    background: "var(--white)",
                                    padding: "3px 10px",
                                    borderRadius: "20px",
                                    color: "var(--gray)",
                                }}
                            />
                            <img
                                src={search}
                                alt=""
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    margin: "7px",
                                    cursor: "pointer",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        background: "transparent",
                        boxShadow: "none",
                        width: "41,6vw",
                        padding: "0"
                    }
                }}
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
    )
};

export default Header;
