import PostCard from "./PostCard";
import Title from "../Title";
import PostGridSide from "./PostGridSide";
import { useState } from "react";
import PostCardSkelton from "./skeletons/PostCard.skelton";
import { useSearchParams } from "react-router-dom";
import PaginatedItems from "../PaginatedItems";

const PostGrid = ({
  posts,
  showPagination = false,
  display_pages = false,
  status,
  last_page,
}) => {
  const [skeLposts] = useState(render_skel_posts());
  const [searchParams] = useSearchParams();

  function render_skel_posts() {
    let result = [];
    for (let i = 0; i < 9; i++) {
      result.push(<PostCardSkelton key={i} />);
    }
    return result;
  }

  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 gap-5 px-4 lg:px-0 pb-4">
        <div className="lg:col-start-1 lg:col-end-10 ">
          <div className="flex justify-between items-center ">
            <Title title="Latest Posts" />
            {display_pages && (
              <span className="font-bold text-gray">
                Pages {searchParams.get("page") ?? 1}/{last_page}
              </span>
            )}
          </div>
          {/*------------------- Looping through posts -------------------*/}
          {status === "success" ? (
            <>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {posts.map((e) => (
                  <PostCard
                    key={e.id}
                    id={e.id}
                    cover={e.cover}
                    title={e.title}
                    username={e.user.username}
                    description={e.description}
                    created_at={e.created_at}
                    userPicture={e.user.picture}
                  />
                ))}
              </div>

              {showPagination && (
                <div className="flex justify-end pt-3">
                  <PaginatedItems itemsPerPage={9} last_page={last_page} />
                </div>
              )}
            </>
          ) : status === "pending" ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
              {skeLposts}
            </div>
          ) : (
            <div>Not Found</div>
          )}
        </div>
        {/*------------------- Post Grid Side -------------------*/}
        <PostGridSide />
      </div>
    </div>
  );
};

export default PostGrid;
