import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/articles");
  }, []);
};

export default Home;
