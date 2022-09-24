import PostGrid from "./PostGrid";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { Link } from "react-router-dom";

const Home = () => {
  /*____________ Hooks ____________*/
  const [posts, setPosts] = useState({ data: [] });
  const [status, setStatus] = useState("pending");

  /*____________ UseEffect ____________*/
  useEffect(() => {
    async function fetch_posts() {
      try {
        const response = await api({
          method: "get",
          url: "/posts",
        });
        setPosts(response.data);
        setStatus("success");
      } catch (err) {
        setStatus("rejected");
      }
    }
    fetch_posts();
  }, []);

  return (
    <div>
      <div className="h-[400px] flex items-center justify-center bg-dark-blue">
        <div className="text-3xl font-bold">NICE TO SEE YOU AGAIN</div>
      </div>
      <div className="container mx-auto">
        <PostGrid posts={posts.data} status={status} />
        <div className="grid grid-cols-12">
          <div className=" col-start-1 col-end-10 flex justify-center">
            <Link to="/posts" className="btn btn-primary mb-4">
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
