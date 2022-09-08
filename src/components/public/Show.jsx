import PostGridSide from "./PostGridSide";
import { useState, useEffect } from "react";
import Title from "../Title";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { AiTwotoneEye } from "react-icons/ai";

const Show = () => {
  const { id } = useParams("id");
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetch_post() {
      const response = await api({
        url: `/posts/${id}`,
        method: "get",
      });
      setPost(response.data);
    }

    fetch_post();
  }, [id]);

  return (
    <div className="mt-[60px] container mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-5 px-4 lg:px-0 pb-4">
        <div className="lg:col-start-1 lg:col-end-10 ">
          <Title title={"Post"} />
          <div className="rounded bg-dark-blue p-4">
            {post ? (
              <div>
                <h1 className="text-3xl font-semibold">{post.title}</h1>
                <div className="flex flex-wrap py-4 text-darker-blue text-sm ">
                  {post.categories.map((e) => (
                    <a
                      key={e.id}
                      className="btn  bg-gray mr-2"
                      href={`/posts?search=${e.name}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {e.name}
                    </a>
                  ))}
                </div>
                <div className="h-[350px] object-cover">
                  {/* "http://localhost/" + post.cover */}
                  <img
                    className="rounded  max-h-full h-full w-full"
                    src={"https://source.unsplash.com/random/1115x350"}
                    alt=""
                  />
                </div>
                <div className="my-2">{post.description}</div>
                <div>{post.content}</div>
                <hr className="block my-4 text-gray " />
                <div className="flex justify-between items-center">
                  {/* User */}
                  <div className="flex items-center">
                    <img
                      src={`http://localhost/${post.user.picture}`}
                      className="w-[50px] h-[50px] rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col text-sm justify-center ml-2">
                      <span className="font-semibold">
                        {post.user.username}
                      </span>
                      <span className="text-gray">
                        {moment(post.created_at).fromNow()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray">
                    <AiTwotoneEye />{" "}
                    <span className="text-sm ml-1 font-semibold ">99</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <PostGridSide />
      </div>
    </div>
  );
};

export default Show;
