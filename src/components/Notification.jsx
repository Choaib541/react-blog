/* => React-Toast */
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { destory, get_data } from "../store/features/NotificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(get_data);

  useEffect(() => {
    switch (notification.status) {
      case "success":
        toast.success(notification.message);
        break;
      case "warning":
        toast.warning(notification.message);
        break;
      case "error":
        toast.error(notification.message);
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
