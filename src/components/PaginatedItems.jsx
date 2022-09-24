import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

function PaginatedItems({ last_page }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    searchParams.set("page", event.selected + 1);
    setSearchParams(searchParams);
  };

  return (
    <>
      <ReactPaginate
        className="flex"
        previousClassName="border border-skel rounded-l-md py-1 px-2"
        nextClassName="border border-skel rounded-r-md py-1 px-2"
        pageClassName="border border-skel hover:bg-gray hover:text-darker-blue"
        pageLinkClassName="p-1 px-2 block"
        breakLabel="..."
        breakClassName="border border-skel hover:bg-gray hover:text-darker-blue"
        breakLinkClassName="p-1 px-2 block"
        nextLabel="Next"
        activeClassName="bg-gray text-darker-blue"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={last_page}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
