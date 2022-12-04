import React, { createContext, useEffect } from "react";
// Styles
import "../../../index.css";
import styled from "./PostPlaces.module.css";
// MUI components
import { Box } from "@mui/system";
// Router components
import { NavLink, useNavigate, useOutlet } from "react-router-dom";

// Images
// actual images
import carousel1 from "../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../assets/images/carousel-3.jpg";
import carousel4 from "../../../assets/images/carousel-4.jpg";
// popular images
import popularCarousel1 from "../../../assets/images/popular-carousel1.jpg";
import popularCarousel2 from "../../../assets/images/popular-carousel2.jpg";
import popularCarousel3 from "../../../assets/images/popular-carousel3.jpg";
import popularCarousel4 from "../../../assets/images/popular-carousel4.jpg";
// interest places images
import interestPlacesCarousel1 from "../../../assets/images/interest-places1.jpg";
import interestPlacesCarousel2 from "../../../assets/images/interest-places2.jpg";
import interestPlacesCarousel3 from "../../../assets/images/interest-places3.jpg";
import interestPlacesCarousel4 from "../../../assets/images/interest-places4.jpg";
import interestPlacesCarousel5 from "../../../assets/images/interest-places5.jpg";
import interestPlacesCarousel6 from "../../../assets/images/interest-places6.jpg";
import interestPlacesCarousel7 from "../../../assets/images/interest-places7.jpg";
import interestPlacesCarousel8 from "../../../assets/images/interest-places8.jpg";
import interestPlacesCarousel9 from "../../../assets/images/interest-places9.jpg";
import interestPlacesCarousel10 from "../../../assets/images/interest-places10.jpg";
// interest places images
import hotel1 from "../../../assets/images/hotel1.jpg";
import hotel2 from "../../../assets/images/hotel2.jpg";
import hotel3 from "../../../assets/images/hotel3.jpg";
import hotel4 from "../../../assets/images/hotel4.jpg";
import hotel5 from "../../../assets/images/hotel5.jpg";
import hotel6 from "../../../assets/images/hotel6.jpg";
import hotel7 from "../../../assets/images/hotel7.jpg";
import hotel8 from "../../../assets/images/hotel8.jpg";
import hotel9 from "../../../assets/images/hotel9.jpg";
import hotel10 from "../../../assets/images/hotel10.jpg";
import hotel11 from "../../../assets/images/hotel11.jpg";
import hotel12 from "../../../assets/images/hotel12.jpg";
// interest places images
import restaurants1 from "../../../assets/images/restaurants-img-1.jpg";
import restaurants2 from "../../../assets/images/restaurants-img-2.jpg";
import restaurants3 from "../../../assets/images/restaurants-img-3.jpg";
import restaurants4 from "../../../assets/images/restaurants-img-4.jpg";
import restaurants5 from "../../../assets/images/restaurants-img-5.webp";
import restaurants6 from "../../../assets/images/restaurants-img-6.jpg";
import restaurants7 from "../../../assets/images/restaurants-img-7.jpg";
import restaurants8 from "../../../assets/images/restaurants-img-8.jpg";
import restaurants9 from "../../../assets/images/restaurants-img-9.jpg";
import restaurants10 from "../../../assets/images/restaurants-img-10.jpg";
import restaurants11 from "../../../assets/images/restaurants-img-11.jpg";
import restaurants12 from "../../../assets/images/restaurants-img-12.jpg";
// user review images
import userReview1 from "../../../assets/images/user-review-1.svg";
import userReview2 from "../../../assets/images/user-review-2.svg";
import userReview3 from "../../../assets/images/user-review-3.svg";
import star from "../../../assets/images/star.svg";
// hotels issyk-kul
import hotelsIssykKul1 from "../../../assets/images/hotels-issyk-kul-1.jpg";
import hotelsIssykKul2 from "../../../assets/images/hotels-issyk-kul-2.jpg";
import hotelsIssykKul3 from "../../../assets/images/hotels-issyk-kul-3.jpg";
import hotelsIssykKul4 from "../../../assets/images/hotels-issyk-kul-4.jpg";

const data = {
  toursData: {
    actual: [
      {
        id: 1,
        title: "Поездка на Ыссык-Куль",
        cover: carousel1,
        images: [
          { url: carousel2 },
          { url: carousel1 },
          { url: carousel3 },
          { url: carousel4 },
          { url: carousel3 },
        ],
        description:
          "Иссы́к-Ку́ль (кирг. Ысык-Көл — «горячее озеро») — бессточное озеро в Киргизии. Входит в 30 крупнейших по площади озёр мира и занимает седьмое место в списке самых глубоких озёр. Расположено в северо-восточной части республики, между хребтами Северного Тянь-Шаня: Кюнгёй-Ала-Тоо и Терскей Ала-Тоо на высоте 1608 метров над уровнем моря[1].Озеро и его окрестности с 2001 года включены во всемирную сеть биосферных заповедников (азиатско-тихоокеанская часть); в Рамсарском списке водно-болотных угодий с 1976 года. Озеро бессточное, в него впадает до 80 сравнительно небольших притоков. Реки полноводны в конце весны и летом. Из них наибольшими являются Тюп и Джергалан, впадающие с востока. Питание рек смешанное, с преобладанием талого стока — снегового и ледникового[1]. В западной части к озеру очень близко подходит река Чу, которая по протоке Кутемалды длиной в шесть километров иногда отдаёт ему часть своих вод во время весенних половодий. Уровень воды в Иссык-Куле циклически меняется (то поднимается, то опускается); цикл происходит в течение нескольких десятилетий. Вода голубого цвета, солоноватая (минерализация — 5,8—5,9 ‰). Прозрачность до 20 метров летом и 47 метров зимой[1].",
        reviewsData: {
          title: "Отзывы",
          reviews: [
            {
              user: {
                nickName: "Alexandr228",
                img: userReview1,
                rating: "5,0",
                star: star,
              },
              review:
                "На пляже мы катались на американских горках, а в последний день прокатились на парашюте! Это было просто невероятно! Открывается замечательный вид на озеро и это ни с чем не сравнится! В общем, домой мы вернулись счастливые, загорелые, с кучей положительных эмоций!",
            },
            {
              user: {
                nickName: "Maksim_xx",
                img: userReview2,
                rating: "5,0",
                star: star,
              },
              review:
                "Озеро находится на высоте примерно 1600 метров над уровнем моря. Кто приезжает в первый раз, тому вода кажется прохладной. Но потом привыкаешь и начинаешь понимать, что купаясь в озере приобретаешь новые силы и здоровье. Особенно полезно купаться по утрам, когда всходит солнце. В это время разность температур воздуха и воды таковы, что в воде ощущаешь большой прилив сил. Приезжать на Иссык-Куль лучше в июле-августе. Но даже в это время бывает по вечерам прохладно, так как озеро расположено среди гор. Рядом с озером, где бы вы не находились, всегда есть красивые ущелья, в которых надо обязательно побывать: открывается панорамный вид на озеро, наблюдается интересный эффект - кажется, что граница воды выше земли. К тому же, во многих ущельях красивые виды речек, елей, камней, сочетающихся в гармоничной пропорции друг с другом. Указала время....",
            },
            {
              user: {
                nickName: "Alexandra228",
                img: userReview3,
                rating: "2,0",
                star: star,
              },
              review:
                "Вода хорошая не спорю, но очень все дорогое. Сервис очень плохой! С Чулпон оты вечером после 8 часов вечера никуда не уедешь на такси. Такси не останавливается. В кафе еда где-то вкусная, где-то нет. Только 1-2 кафе где еда нормальная и вкусная в центре Чолпон оты. Кафе 'золотая рыбка' кроме бризоли и вина ничего нет вкусного. Главный официант (так как менеджер у них не предусмотрен) и бармен не могли мне посчитать сколько стоит 1 литр вина. 120 мл стоит 100 сом. И все не могли посчитать. Шашлыки у них сухие, не держали в маринаде. Официанты плохо обслуживают. Приходилось за вилками и тарелками самой ходить. Официант не успевал и говорил что у меня с вами 3 стола. Уксус 10% ещё разводят водой. К шашлыкам лук не падают, а если нужен лук плати отдельно за него. Ок, заказываем лук, приносят без уксуса и нарубленный как дрова. Хоть там цены выше чем в других местах. Обслуживание как в Ташкенте 10-15 %...",
            },
          ],
        },
        hotelsAndRestaurantsData: {
          title: "Отели и рестораны поблизости в этом месте",
          hotelsAndRestaurants: [
            { title: "Центр отдыха Каприз", cover: hotelsIssykKul1 },
            { title: "Hillside Kara-Kol", cover: hotelsIssykKul2 },
            { title: "Мурас", cover: hotelsIssykKul3 },
            { title: "Отель Маданур", cover: hotelsIssykKul4 },
            { title: "Центр отдыха Каприз", cover: hotelsIssykKul1 },
            { title: "Hillside Kara-Kol", cover: hotelsIssykKul2 },
            { title: "Мурас", cover: hotelsIssykKul3 },
            { title: "Отель Маданур", cover: hotelsIssykKul4 },
          ],
        },
      },
      {
        id: 2,
        title: "Ущелье Чон-Кемин",
        cover: carousel2,
      },
      {
        id: 3,
        title: "Ущелье Чункурчак",
        cover: carousel3,
      },
      {
        id: 4,
        title: "Кель-Суу",
        cover: carousel4,
      },

      {
        id: 5,
        title: "Поездка на Ыссык-Куль",
        cover: carousel1,
      },
      {
        id: 6,
        title: "Ущелье Чон-Кемин",
        cover: carousel2,
      },
      {
        id: 7,
        title: "Ущелье Чункурчак",
        cover: carousel3,
      },
      {
        id: 8,
        title: "Кель-Суу",
        cover: carousel4,
      },
    ],
    popular: [
      {
        title: "Ала-Арча на целый день",
        cover: popularCarousel1,
      },
      {
        title: "Ущелье Чон-Кемин",
        cover: popularCarousel2,
      },
      {
        title: "Ущелье Чункурчак",
        cover: popularCarousel3,
      },
      {
        title: "Кель-Суу",
        cover: popularCarousel4,
      },

      {
        title: "Поездка на Ыссык-Куль",
        cover: popularCarousel1,
      },
      {
        title: "Ущелье Чон-Кемин",
        cover: popularCarousel2,
      },
      {
        title: "Ущелье Чункурчак",
        cover: popularCarousel3,
      },
      {
        title: "Кель-Суу",
        cover: popularCarousel4,
      },
    ],
    interestsPlaces: [
      {
        title: "Кара-Кол",
        cover: interestPlacesCarousel1,
      },
      {
        title: "Суусамырская долина",
        cover: interestPlacesCarousel2,
      },
      {
        title: "Исторический музей",
        cover: interestPlacesCarousel3,
      },
      {
        title: "Мавзолей Гувбез Манаса",
        cover: interestPlacesCarousel4,
      },
      {
        title: "Дунганская мечеть в Караколе",
        cover: interestPlacesCarousel5,
      },
      {
        title: "Башня Бурана",
        cover: interestPlacesCarousel6,
      },
      {
        title: "Рух-Ордо",
        cover: interestPlacesCarousel7,
      },
      {
        title: "Прекрасный Сон-Куль",
        cover: interestPlacesCarousel8,
      },
      {
        title: "Ореховый лес Арстанбап",
        cover: interestPlacesCarousel9,
      },
      {
        title: "Горы Тянь-Шань",
        cover: interestPlacesCarousel10,
      },
    ],
  },
  hotelsData: {
    title: "Интересные места, где вы можете отдохнуть",
    hotels: [
      { title: "Orion Hotel", img: hotel1, rating: "5,0", location: "Бишкек" },
      { title: "Sheraton", img: hotel2, rating: "4,5", location: "Бишкек" },
      { title: "Novotel", img: hotel3, rating: "5,0", location: "Бишкек" },
      {
        title: "Jannat Regency",
        img: hotel4,
        rating: "4,5",
        location: "Бишкек",
      },
      { title: "Ambassador", img: hotel5, rating: "4,5", location: "Бишкек" },
      {
        title: "Ramada by Wyndham",
        img: hotel6,
        rating: "4,5",
        location: "Бишкек",
      },
      { title: "City Hotel", img: hotel7, rating: "4,5", location: "Бишкек" },
      { title: "Onyx Hotel", img: hotel8, rating: "4,0", location: "Бишкек" },
      { title: "Soluxe Hotel", img: hotel9, rating: "4,5", location: "Бишкек" },
      { title: "Madison Ave", img: hotel10, rating: "4,5", location: "Бишкек" },
      {
        title: "Silk Road lodge",
        img: hotel11,
        rating: "4,0",
        location: "Бишкек",
      },
      { title: "Grand Hotel", img: hotel12, rating: "4,5", location: "Бишкек" },
    ],
  },
  restaurantsData: {
    title: "Интересные места, где вы можете вкусно поесть",
    restaurants: [
      { title: "Супара", img: restaurants1, rating: "5,0", location: "Бишкек" },
      { title: "Фаиза", img: restaurants2, rating: "4,5", location: "Бишкек" },
      {
        title: "Чайхана Navat",
        img: restaurants3,
        rating: "5,0",
        location: "Бишкек",
      },
      {
        title: "China town",
        img: restaurants4,
        rating: "4,5",
        location: "Бишкек",
      },
      {
        title: "Облако 53",
        img: restaurants5,
        rating: "4,5",
        location: "Бишкек",
      },
      {
        title: "The most",
        img: restaurants6,
        rating: "4,5",
        location: "Бишкек",
      },
      { title: "Cyclon", img: restaurants7, rating: "4,5", location: "Бишкек" },
      {
        title: "Arzu Grand",
        img: restaurants8,
        rating: "4,0",
        location: "Бишкек",
      },
      {
        title: "Panda Cofee",
        img: restaurants9,
        rating: "4,5",
        location: "Бишкек",
      },
      {
        title: "Дубровский",
        img: restaurants10,
        rating: "4,5",
        location: "Бишкек",
      },
      {
        title: "Baan Baan Thai",
        img: restaurants11,
        rating: "4,0",
        location: "Бишкек",
      },
      {
        title: "Bellagio Cofee",
        img: restaurants12,
        rating: "4,5",
        location: "Бишкек",
      },
    ],
  },
};

export const Context = createContext({ data });

const PostPlaces = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/places/tours");
  }, []);

  const outlet = useOutlet();

  const setActive = ({ isActive }) => (isActive ? styled.active : styled.link);

  return (
    <>
      <Box>
        <Box className={styled.parent}>
          <Box className={styled.parentInner}>
            <NavLink to="tours" className={setActive}>
              Туры
            </NavLink>
            <NavLink to="hotels" className={setActive}>
              Отели
            </NavLink>
            <NavLink to="restaurants" className={setActive}>
              Рестораны
            </NavLink>
          </Box>
        </Box>
        <Box>
          <Context.Provider value={{ Context }}>{outlet}</Context.Provider>
        </Box>
      </Box>
    </>
  );
};
export default PostPlaces;
