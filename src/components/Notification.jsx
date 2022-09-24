/* => React-Toast */
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { destory, get_data } from "../store/features/NotificationSlice";
import Success from "./notifications/Success";
import Error from "./notifications/Error";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(get_data);

  useEffect(() => {
    switch (notification.status) {
      case "success":
        Success(notification.message);
        break;
      case "error":
        Error(notification.message);
        break;
      default: {
      }
    }
    dispatch(destory());
  }, [dispatch, notification.status, notification.message]);

  return (
    <div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Notification;
