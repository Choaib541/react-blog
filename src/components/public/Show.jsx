import PostGridSide from "./PostGridSide";
import { useState, useEffect } from "react";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import ShowPost from "./Show.post";
import ShowPostSkelton from "./skeletons/Show.post.skelton";
const Show = () => {
  const { id } = useParams("id");
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    async function fetch_post() {
      try {
        const response = await api({
          url: `/posts/${id}`,
          method: "get",
        });
        setPost(response.data);
        setStatus("success");
      } catch (err) {
        setStatus("rejected");
      }
    }

    fetch_post();
  }, [id]);

  return (
    <div className="mt-[60px] container mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-5 px-4 lg:px-0 pb-4">
        {status === "pending" && <ShowPostSkelton />}
        {status === "success" && <ShowPost post={post} />}
        {status === "rejected" && "404"}
        <PostGridSide />
      </div>
    </div>
  );
};

export default Show;
