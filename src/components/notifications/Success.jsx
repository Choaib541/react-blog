import { FaThumbsUp } from "react-icons/fa";
import { toast } from "react-hot-toast";
const Success = (message) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "block" : "hidden"
      } p-2 bg-success rounded px-4 flex items-center`}
    >
      <FaThumbsUp className="mr-2" />
      <div>{message}</div>
    </div>
  ));
};

export default Success;
