import Title from "../../Title";
import TagSkelton from "./Tag.skelton";
import ProfileSkelton from "./Profile.skelton";
import PargraphSkelton from "./Pargraph.skelton";
const ShowPostSkelton = () => {
  return (
    <div className="lg:col-start-1 lg:col-end-10 ">
      <Title title={"Post"} />
      <div className="rounded bg-dark-blue p-4">
        <div>
          <div className="text-3xl font-semibold h-[10px] w-[180px] rounded bg-skel animate-pulse"></div>
          <div className="flex flex-wrap py-4 text-darker-blue text-sm ">
            <TagSkelton />
            <TagSkelton />
            <TagSkelton />
          </div>
          <div className="h-[350px] object-cover">
            <div className="rounded  max-h-full h-full w-full bg-skel animate-pulse"></div>
          </div>
          <PargraphSkelton />

          <div className="my-5">
            <PargraphSkelton />
          </div>
          <hr className="block my-4 text-gray " />
          <div className="flex justify-between items-center">
            <ProfileSkelton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPostSkelton;
