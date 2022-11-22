// Components
import PostBlog from "../components/posts/PostBlog/PostBlog";

// Images
import blogIssykKul from "../assets/images/blog-issyk-kul.jpg";
import issykKul2 from "../assets/images/issyk-kul-2.jpg";
import issykKul3 from "../assets/images/issyk-kul-3.jpg";
import issykKul4 from "../assets/images/issyk-kul-4.jpg";
import issykKul5 from "../assets/images/issyk-kul-5.jpg";

// Konorcheck
import blogKonorchek from "../assets/images/blog-konorcheck.jpg";
import blogKonorchek2 from "../assets/images/blog-konorcheck-2.jpg";
import blogKonorchek3 from "../assets/images/blog-konorcheck-3.jpg";
import blogKonorchek4 from "../assets/images/blog-konorcheck-4.jpg";
import blogKonorchek5 from "../assets/images/blog-konorcheck-5.jpg";

// Ala-Archa
import blogAlaArcha from "../assets/images/blog-ala-archa.jpg";
import blogAlaArcha2 from "../assets/images/blog-ala-archa-2.jpg";
import blogAlaArcha3 from "../assets/images/blog-ala-archa-3.jpg";
import blogAlaArcha4 from "../assets/images/blog-ala-archa-4.jpg";
import blogAlaArcha5 from "../assets/images/blog-ala-archa-5.jpg";

// Tracking
import blogTarcking from "../assets/images/blog-tracking.jpg";
import blogTarcking2 from "../assets/images/blog-tracking-2.jpg";
import blogTarcking3 from "../assets/images/blog-tracking-3.jpg";
import blogTarcking4 from "../assets/images/blog-tracking-4.jpg";
import blogTarcking5 from "../assets/images/blog-tracking-5.jpg";

// avtar
import avatar1 from "../assets/images/avatar-1.svg";
import avatar2 from "../assets/images/avatar-2.svg";
import avatar3 from "../assets/images/avatar-3.svg";
import avatar4 from "../assets/images/avatar-4.svg";

const Blog = () => {
  const blogData = [
    {
      author: {
        firstName: "Chyngyz",
        lastName: "Ranietov",
        image: avatar1,
        date: "Ноябрь 8,2022",
      },
      title:
        "Иссык-Куль отличное и недорогое место для отдыха! Советы и предупреждения, тем кто собрался туда в первые! Много полезной информации)",
      description:
        "Мне очень нравится там отдыхать , загран. паспорт не нужен . Люди доброжелательные , отдых недорогой , почти все разговаривают на русском . Озеро очень красивое . Советую ! Благодарю за внимание. Будут вопросы , пишите !",
      images: [
        { url: blogIssykKul },
        { url: issykKul2 },
        { url: issykKul3 },
        { url: issykKul4 },
        { url: issykKul5 },
      ],
    },
    {
      author: {
        firstName: "Erlan",
        lastName: " Mamytov",
        image: avatar2,
        date: "Ноябрь 7,2022",
      },
      title: "Поездка в Конорчек.",
      description:
        "Так вышло, что я сейчас живу и работаю в Бишкеке, Киргизия. Место это богато красивыми местами, которые обязательно надо увидеть, пока я здесь, а вот со свободным временем у меня все не так сладко. В общем собрал я группу единомышленников, запланировали мы поездку всего на 3ри дня, поэтому выбирали место не очень далеко от Бишкека, и...",
      images: [
        { url: blogKonorchek },
        { url: blogKonorchek2 },
        { url: blogKonorchek3 },
        { url: blogKonorchek4 },
        { url: blogKonorchek5 },
      ],
    },
    {
      author: {
        firstName: "Ravshan",
        lastName: " Nazarov",
        image: avatar3,
        date: "Ноябрь 7,2022",
      },
      title: "Одно из красивейших мест в Кыргызстане!",
      description:
        "Ущелье Ала-Арча находится в 40 минутах езды от столицы Кыргызстана - г.Бишкек. Ущелье по праву считается одним из красивейших мест Кыргызстана! Растительность очень многообразна и при въезде в ущелье сразу ощущается чистый горный воздух с большим содержанием кислорода! Первозданность природы во всей своей красе дает много....",
      images: [
        { url: blogAlaArcha },
        { url: blogAlaArcha2 },
        { url: blogAlaArcha3 },
        { url: blogAlaArcha4 },
        { url: blogAlaArcha5 },
      ],
    },
    {
      author: {
        firstName: "Aleksandr",
        lastName: "Mokryvskyi",
        image: avatar4,
        date: "Ноябрь 7,2022",
      },
      title: "Что нужно взять для трекинга?",
      description:
        "С каждым годом всё больше людей выбирают активный отдых на природе и отправляются в многодневный поход. Залогом любого успешного похода является правильно собранные вещи. Список вещей которые вам нужно взять: *Хоба-это специальная туристическая сидушка, которая может спасти вас от грязи и холода, а также сгладить неровности...",
      images: [
        { url: blogTarcking },
        { url: blogTarcking2 },
        { url: blogTarcking3 },
        { url: blogTarcking4 },
        { url: blogTarcking5 },
      ],
    },
  ];

  return (
    <>
      <PostBlog blogData={blogData} />
    </>
  );
};

export default Blog;
