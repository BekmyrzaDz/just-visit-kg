import React from "react";
// MUI components
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
// Components
import PostLifehack from "../components/PostLifehack";

// Images
import lifehack1 from "../assets/images/yssyk-kuls-lifehack.jpg";
import lifehack2 from "../assets/images/issyk-kul-2.jpg";
import lifehack3 from "../assets/images/issyk-kul-3.jpg";
import lifehack4 from "../assets/images/issyk-kul-4.jpg";
import lifehack5 from "../assets/images/issyk-kul-5.jpg";

// Sary Cheleck
import saryCheleck from "../assets/images/sary-cheleck-lifehack.jpg";

// Treacking
import tracking from "../assets/images/tracking-lifehack.jpg";

const Lifehack = () => {
  const data = [
    {
      title: "Что нужно взять для трекинга?",
      images: [
        { url: lifehack1 },
        { url: lifehack2 },
        { url: lifehack3 },
        { url: lifehack4 },
        { url: lifehack5 },
      ],
      description:
        "С каждым годом всё больше людей выбирают активный отдых на природе и отправляются в многодневный поход. Залогом любого успешного похода является правильно собранные вещи. Список...",
    },
    {
      title: "Куда следует пойти на трекинг в Кыргыстане",
      images: [
        { url: saryCheleck },
        { url: lifehack2 },
        { url: lifehack3 },
        { url: lifehack4 },
        { url: lifehack5 },
      ],
      description:
        "Горный поход к озеру Сары-Челек и другим озерама окружающим его. В этом удивительном походе вы сполна насладитесь видами на озером Сары-Челек с разных панорамных точек. А также за....",
    },
    {
      title: "Лайфхаки, как не облажаться с трекингом ",
      images: [
        { url: tracking },
        { url: lifehack2 },
        { url: lifehack3 },
        { url: lifehack4 },
        { url: lifehack5 },
      ],
      description:
        "«Вы должны быть готовы к самому худшему: безостановочному ливню или штормовому ветру». За границей костры можно жечь далеко не везде, во многих европейских странах вы заплатите....",
    },
  ];

  return (
    <>
      <Box>
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
      </Box>
      <PostLifehack data={data} />
    </>
  );
};

export default Lifehack;
