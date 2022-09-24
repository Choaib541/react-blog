const ProfileSkelton = () => {
  return (
    <div className="pt-[15px] flex justify-between items-center ">
      {/* ------------ User ------------ */}
      <div className="user flex items-stretch">
        {/*img*/}
        <div className="w-[45px] h-[45px] rounded-full  bg-skel animate-pulse"></div>
        <div className="ml-[10px] flex flex-col justify-center gap-2">
          <div className="bg-skel animate-pulse rounded  h-[8px] w-[60px]"></div>
          <div className="bg-skel animate-pulse  rounded h-[8px] w-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkelton;
