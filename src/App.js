import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PostPlacesHotels from "./components/posts/PostPlaces/PostPlacesHotels/PostPlacesHotels";
import PostPlacesRestaurants from "./components/posts/PostPlaces/PostPlacesRestaurants/PostPlacesRestaurants";
import PostPlacesTours from "./components/posts/PostPlaces/PostPlacesTours/PostPlacesTours";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/places/*" element={<Places />}>
          <Route path="tours" element={<PostPlacesTours />} />
          <Route path="hotels" element={<PostPlacesHotels />} />
          <Route path="restaurants" element={<PostPlacesRestaurants />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
