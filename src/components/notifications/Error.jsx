import { BiErrorAlt } from "react-icons/bi";
import { toast } from "react-hot-toast";

const Error = (message) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "block" : "hidden"
      } p-2 bg-danger rounded flex items-center`}
    >
      <BiErrorAlt className="mr-2" />
      <div>{message}</div>
    </div>
  ));
};

export default Error;
