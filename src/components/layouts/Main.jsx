import Navbar from "../public/partials/Navbar";
import Footer from "../public/partials/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh_-_60px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
