import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MapLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ background: "#1E2431" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MapLayout;
