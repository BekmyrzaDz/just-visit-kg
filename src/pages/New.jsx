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
import PostNews from "../components/PostNews";

// Images
import bishkek from "../assets/images/bishkek.jpg";
import lifehack2 from "../assets/images/issyk-kul-2.jpg";
import lifehack3 from "../assets/images/issyk-kul-3.jpg";
import lifehack4 from "../assets/images/issyk-kul-4.jpg";
import lifehack5 from "../assets/images/issyk-kul-5.jpg";

// Sary Cheleck
import eclipse from "../assets/images/eclipse.jpg";

const New = () => {
  const data = [
    {
      title:
        "В Бишкеке открылся новый парк дружбы между Кыргызстаном и Азербайджаном",
      images: [
        { url: bishkek },
        { url: lifehack2 },
        { url: lifehack3 },
        { url: lifehack4 },
        { url: lifehack5 },
      ],
      description:
        "Сегодня, 11 октября, в рамках госвизита Ильхама Алиева в Кыргызстан состоялось открытие Кыргызско-азербайджанского парка дружбы. Как сообщает администрация президента, в церемонии открытия приняли.... ",
    },
    {
      title: "Сегодня в Кыргызстане произошло солнечное затмение",
      images: [
        { url: eclipse },
        { url: lifehack2 },
        { url: lifehack3 },
        { url: lifehack4 },
        { url: lifehack5 },
      ],
      description:
        "ближе к вечеру произойдет завораживающее астрономическое явление, частичное солнечное затмение. В этот день Луна закроет Солнце на 70%.Стоит отметить, что солнечное затмение можно будет заметить, даже",
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
      <PostNews data={data} />
    </>
  );
};

export default New;
