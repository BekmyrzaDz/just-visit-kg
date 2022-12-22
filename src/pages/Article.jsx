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
        { picture: issyKyl1 },
        { picture: issyKyl2 },
        { picture: issyKyl3 },
        { picture: issyKyl4 },
        { picture: issyKyl5 },
      ],
      description:
        "Лазурный Иссык-Куль - краса и гордость киргизской земли, величественно раскинулся между двумя хребтами - Кунгей Алатау и Терскей Алатау. Несколько тысяч лет назад этих Озеро Иссык",
    },
    {
      title: "Ущелье Ак-Тюз. Интересные факты",
      images: [
        { picture: akTuz1 },
        { picture: issyKyl2 },
        { picture: issyKyl3 },
        { picture: issyKyl4 },
        { picture: issyKyl5 },
      ],
      description:
        "Ущелье и поселок  Ак-Тюз находится в 137 км от Бишкека на высоте 2,300 м над уровнем моря В переводе  Ак-Тюз означает «белая долина», и это связано с тем, что склоны ущелья имеют",
    },
    {
      title: "Озеро Кель-Суу",
      images: [
        { picture: kelSuu1 },
        { picture: issyKyl2 },
        { picture: issyKyl3 },
        { picture: issyKyl4 },
        { picture: issyKyl5 },
      ],
      description:
        "В высокогорной местности недалеко от границы с Китаем есть красивейшее озеро. Чтобы попасть туда, нужно четыре часа ехать на машине из Нарына. Название озера переводится как....",
    },
    {
      title: "Арсланбоб. Одно из крупнейших ореховых лесов",
      images: [
        { picture: arslanBob1 },
        { picture: issyKyl2 },
        { picture: issyKyl3 },
        { picture: issyKyl4 },
        { picture: issyKyl5 },
      ],
      description:
        "Один из крупнейших ореховых лесов в мире. Впервые заинтересовал поселенцев в III веке до нашей эры, а сегодня привлекает тысячи туристов из разных стран....",
    },
  ];

  return (
    <>
      <Container sx={{ width: "640px" }}>
        <PostArticle data={data} />
      </Container>
    </>
  );
};

export default Article;
