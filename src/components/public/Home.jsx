import PostGrid from "./PostGrid";

const Home = () => {
  return (
    <div>
      <div className="h-[400px] flex items-center justify-center bg-dark-blue">
        <div className="text-3xl font-bold">NICE TO SEE YOU AGAIN</div>
      </div>
      <PostGrid />
    </div>
  );
};

export default Home;
