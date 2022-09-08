import { useEffect } from "react";

const Pagination = ({ current_page, last_page }) => {
  let pages = [];

  useEffect(() => {
    // if () {

    // }
    for (let i = 0; i < last_page; i++) {
      pages.push(
        <button
          key={i}
          className="btn border border-gray rounded-none   hover:bg-gray hover:text-darker-blue"
        >
          {i + 1}
        </button>
      );
    }
  }, []);

  return (
    <div>
      <button className="btn border border-gray rounded-r-none hover:bg-gray hover:text-darker-blue">
        Previous
      </button>
      {pages}
      <button className="btn border border-gray rounded-l-none hover:bg-gray hover:text-darker-blue">
        Next
      </button>
    </div>
  );
};

export default Pagination;
