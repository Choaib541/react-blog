import PostGrid from "./PostGrid";
import { useEffect, useState } from "react";
import { api } from "../../api";

const Home = () => {
  /*____________ Hooks ____________*/
  const [posts, setPosts] = useState({ data: [] });

  /*____________ UseEffect ____________*/
  useEffect(() => {
    async function fetch_posts() {
      const response = await api({
        method: "get",
        url: "/posts",
      });

      setPosts(response.data);
    }
    fetch_posts();
  }, []);
  return (
    <div>
      <div className="h-[400px] flex items-center justify-center bg-dark-blue">
        <div className="text-3xl font-bold">NICE TO SEE YOU AGAIN</div>
      </div>
      <div className="container mx-auto">
        <PostGrid posts={posts.data} />
        <div className="grid grid-cols-12">
          <div className=" col-start-1 col-end-10 flex justify-center">
            <button className="btn btn-primary mb-4">MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
