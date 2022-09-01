import PostGrid from "./PostGrid";

const Home = () => {
  return (
    <div>
      <div className="h-[400px] flex items-center justify-center bg-dark-blue">
        <div className="text-3xl font-bold">NICE TO SEE YOU AGAIN</div>
      </div>
      <div className="container mx-auto">
        <PostGrid />
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
