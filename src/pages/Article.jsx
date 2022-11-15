import React from "react";
// Styles
import "../index.css";
// MUI components
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
// Components
import PostArticle from "../components/posts/PostArticles/PostArticles";
// Images
// Issyk-Kul
import issyKyl1 from "../assets/images/issyk-kul-1.jpg";
import issyKyl2 from "../assets/images/issyk-kul-2.jpg";
import issyKyl3 from "../assets/images/issyk-kul-3.jpg";
import issyKyl4 from "../assets/images/issyk-kul-4.jpg";
import issyKyl5 from "../assets/images/issyk-kul-5.jpg";

// Ak-Tuz
import akTuz1 from "../assets/images/ak-tuz-1.png";
import akTuz2 from "../assets/images/issyk-kul-2.jpg";
import akTuz3 from "../assets/images/issyk-kul-3.jpg";
import akTuz4 from "../assets/images/issyk-kul-4.jpg";
import akTuz5 from "../assets/images/issyk-kul-5.jpg";

// Kel-Suu
import kelSuu1 from "../assets/images/kel-suu-1.jpg";
import kelSuu2 from "../assets/images/issyk-kul-2.jpg";
import kelSuu3 from "../assets/images/issyk-kul-3.jpg";
import kelSuu4 from "../assets/images/issyk-kul-4.jpg";
import kelSuu5 from "../assets/images/issyk-kul-5.jpg";

// Arslan-Bob
import arslanBob1 from "../assets/images/arslan-bob-1.jpg";
import arslanBob2 from "../assets/images/issyk-kul-2.jpg";
import arslanBob3 from "../assets/images/issyk-kul-3.jpg";
import arslanBob4 from "../assets/images/issyk-kul-4.jpg";
import arslanBob5 from "../assets/images/issyk-kul-5.jpg";

const Article = () => {
  const data = [
    {
      title: "Почему любят Ыссык-куль?",
      images: [
        { url: issyKyl1 },
        { url: issyKyl2 },
        { url: issyKyl3 },
        { url: issyKyl4 },
        { url: issyKyl5 },
      ],
      description:
        "Лазурный Иссык-Куль - краса и гордость киргизской земли, величественно раскинулся между двумя хребтами - Кунгей Алатау и Терскей Алатау. Несколько тысяч лет назад этих Озеро Иссык",
    },
    {
      title: "Ущелье Ак-Тюз. Интересные факты",
      images: [
        { url: akTuz1 },
        { url: issyKyl2 },
        { url: issyKyl3 },
        { url: issyKyl4 },
        { url: issyKyl5 },
      ],
      description:
        "Ущелье и поселок  Ак-Тюз находится в 137 км от Бишкека на высоте 2,300 м над уровнем моря В переводе  Ак-Тюз означает «белая долина», и это связано с тем, что склоны ущелья имеют",
    },
    {
      title: "Озеро Кель-Суу",
      images: [
        { url: kelSuu1 },
        { url: issyKyl2 },
        { url: issyKyl3 },
        { url: issyKyl4 },
        { url: issyKyl5 },
      ],
      description:
        "В высокогорной местности недалеко от границы с Китаем есть красивейшее озеро. Чтобы попасть туда, нужно четыре часа ехать на машине из Нарына. Название озера переводится как....",
    },
    {
      title: "Арсланбоб. Одно из крупнейших ореховых лесов",
      images: [
        { url: arslanBob1 },
        { url: issyKyl2 },
        { url: issyKyl3 },
        { url: issyKyl4 },
        { url: issyKyl5 },
      ],
      description:
        "Один из крупнейших ореховых лесов в мире. Впервые заинтересовал поселенцев в III веке до нашей эры, а сегодня привлекает тысячи туристов из разных стран....",
    },
  ];

  return (
    <>
      {/* <Box>
        <Box
          sx={{
            position: "absolute",
            left: "119px",
            top: "305px",
            width: "241px",
            background: "var(--light-brown)",
            padding: "5px 30px",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Material Sans",
              color: "var(--black)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            Статьи,которые вы хотите видеть
          </Typography>
          <Box>
            <FormGroup>
              <FormControlLabel
                sx={{
                  color: "var(--black)",
                  "&.MuiFormControlLabel-label": {
                    color: "var(--black)",
                  },
                }}
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      // ".MuiFormControlLabel-label": {
                      //   color: "var(--black)",
                      // },
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="Горнолыжие"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="трекинг"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="водопады"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="каньоны"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "var(--black)",
                      "&.Mui-checked": {
                        color: "var(--black)",
                      },
                    }}
                  />
                }
                label="озера"
              />
            </FormGroup>
          </Box>
        </Box>
      </Box> */}
      <Container sx={{ width: "640px" }}>
        <PostArticle data={data} />
      </Container>
    </>
  );
};

export default Article;
