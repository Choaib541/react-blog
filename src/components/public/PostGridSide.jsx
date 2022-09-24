import Title from "../Title";
import placeholder from "../../assets/placeholder.jpg";
import { FaGithub } from "react-icons/fa";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";
import { api } from "../../api";
import Categories from "./Categories";
import CategoriesSkelton from "./skeletons/Categories.skelton";

const Side = () => {
  const [categories, setCategories] = useState({
    data: [],
  });
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    async function fetch_categories() {
      try {
        const response = await api({
          method: "get",
          url: "/categories",
        });
        setCategories(response.data);
        setStatus("success");
      } catch (err) {
        setStatus("rejected");
      }
    }

    fetch_categories();
  }, []);

  return (
    <>
      <div className="lg:col-start-10 lg:col-end-13">
        {/* / Owner / */}
        <Title title="About The Owner" />
        <div className="flex items-center justify-center flex-col text-center bg-dark-blue rounded py-8">
          <img
            src={placeholder}
            className="w-[80px] h-[80px] rounded-full"
            alt=""
          />
          <span className="text-lg font-bold py-2">Mouhrach Choaib</span>
          <span className="mx-12 text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            harum reiciendis eaque nobis. Non quisquam veritatis velit omnis
          </span>
          <div className="flex mt-4">
            <a
              href="https://github.com/Choaib541"
              className="mx-2 text-xl text-gray"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/Camado.Choaib"
              className="mx-2 text-xl text-gray"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/choaib-mouhrach-3b08a5219/"
              className="mx-2 text-xl text-gray"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        {/* / newsletter / */}
        <Title title="NewsLetter" />
        <div className="flex items-center justify-center flex-col text-center bg-dark-blue rounded py-8">
          <form action="" className="flex flex-col  w-full px-8">
            <input
              type="text"
              className="input-control"
              placeholder="Email Address..."
            />
            <button className="bg-primary rounded py-2 mt-3">Send</button>
          </form>
        </div>
        {/* / usefull categories / */}
        <Title title="Usefull Categories" />
        {status === "success" && <Categories categories={categories} />}
        {status === "pending" && <CategoriesSkelton />}
        {status === "rejected" && "Products Not Found"}
      </div>
    </>
  );
};

export default Side;
