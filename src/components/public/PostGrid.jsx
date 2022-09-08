import PostCard from "./PostCard";
import Title from "../Title";
import PostGridSide from "./PostGridSide";

const PostGrid = ({
  posts,
  showPagination = false,
  current_page,
  last_page,
}) => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 gap-5 px-4 lg:px-0 pb-4">
        <div className="lg:col-start-1 lg:col-end-10 ">
          <div className="flex justify-between items-center ">
            <Title title="Latest Posts" />
            <span className="font-bold text-gray">
              Pages {current_page}/{last_page}
            </span>
          </div>
          <div className="grid  lg:grid-cols-3 gap-2">
            {/*------------------- Looping through posts -------------------*/}
            {posts.length > 0 ? (
              posts.map((e) => (
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
              ))
            ) : (
              <div className="text-gray">
                <i>The post that you are searching for is not found</i>
              </div>
            )}
          </div>
          {/* {showPagination && (
            <div className="flex justify-center lg:justify-end py-4">
              <Pagination current_page={current_page} last_page={last_page} />
            </div>
          )} */}
        </div>
        {/*------------------- Post Grid Side -------------------*/}
        <PostGridSide />
      </div>
    </div>
  );
};

export default PostGrid;
