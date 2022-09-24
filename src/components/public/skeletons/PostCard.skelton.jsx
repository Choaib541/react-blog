import ProfileSkelton from "./Profile.skelton";

const PostCardSkelton = () => {
  return (
    <div className="p-2 bg-dark-blue rounded shadow-sm">
      {/* ------------ Cover ------------ */}
      <div>
        <div className="bg-skel h-[250px] w-full rounded animate-pulse"></div>
      </div>
      {/* ------------ Content ------------*/}
      <div>
        <div className="w-[50px] h-[8px] rounded my-3 bg-skel animate-pulse"></div>
        <div className="w-[85%] h-[8px] rounded my-3 bg-skel animate-pulse "></div>
        <div className="w-[80%] h-[8px] rounded my-3 bg-skel animate-pulse "></div>
        <div className="w-[50%] h-[8px] rounded my-3 bg-skel animate-pulse "></div>
        <div className="w-[60%] h-[8px] rounded my-3 bg-skel animate-pulse "></div>
        <div className="w-[80%] h-[8px] rounded my-3 bg-skel animate-pulse "></div>
        <div className="w-[60%] h-[8px] rounded my-3 bg-skel animate-pulse "></div>
        <ProfileSkelton />
      </div>
    </div>
  );
};

export default PostCardSkelton;
