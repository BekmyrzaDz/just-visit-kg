import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Lifehack from "./pages/Lifehack";
import New from "./pages/New";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/lifehacks" element={<Lifehack />} />
        <Route path="/news" element={<New />} />
      </Route>
    </Routes>
  );
}

export default App;
