import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Lifehack from "./pages/Lifehack";
import New from "./pages/New";
import {useEffect} from "react";
import {gapi} from "gapi-script";
import Authorization from "./pages/Authorization/Authorization";

function App() {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
    })


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/lifehacks" element={<Lifehack />} />
        <Route path="/news" element={<New />} />
        <Route path="/authorization" element={<Authorization/>} />
      </Route>
    </Routes>
  );
}

export default App;
