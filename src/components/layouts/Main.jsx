import Navbar from "../public/partials/Navbar";
import Footer from "../public/partials/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { get_data } from "../../store/features/NotificationSlice";
import Notification from "../Notification";
const Main = () => {
  /*______________ Hooks ______________*/
  const natification_data = useSelector(get_data);
  /*______________ JSX ______________*/
  return (
    <div>
      <Notification />
      <Navbar />
      <div className="min-h-[calc(100vh_-_60px)]">
        {natification_data.status === "success" && (
          <div className="absolute right-0 bottom-0 m-4 bg-success z-40 p-2 px-3 shadow-lg rounded-lg">
            {natification_data.message}
          </div>
        )}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
