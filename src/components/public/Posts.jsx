import React, { useEffect, useState } from "react";
import PostGrid from "./PostGrid";
import { api } from "../../api";
import { useSearchParams } from "react-router-dom";
import { debounce } from "../../helpers/apiHelpers";

const Posts = () => {
  /*__________ STATES __________*/
  const [searchParams, setSearchParams] = useSearchParams({});
  const [status, setStatus] = useState("pending");
  const [posts, setPosts] = useState({
    data: [],
    last_page: null,
  });

  /*__________ useEffect __________*/
  useEffect(() => {
    async function fetch_data() {
      let url = "/posts";
      let url_edited = false;
      if (searchParams.get("search")) {
        url += `?search=${searchParams.get("search")}`;
        url_edited = true;
      }

      if (searchParams.get("page")) {
        if (url_edited) {
          url += `&page=${searchParams.get("page")}`;
        } else {
          url += `?page=${searchParams.get("page")}`;
        }
      }

      try {
        const response = await api({
          method: "get",
          url: url,
        });
        setPosts(response.data);
        setStatus("success");
      } catch (err) {
        setStatus("rejected");
      }
    }
    fetch_data();
  }, [searchParams]);

  /*__________ Functions __________*/
  const handle_input_search = debounce((value) => {
    value = value.replaceAll(" ", "%");
    setSearchParams({ ...searchParams, search: value });
  });

  /*__________ JSX __________*/
  return (
    <div className="container mx-auto pt-[60px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-dark-blue rounded p-2 mt-4 mx-4 lg:mx-0"
      >
        <input
          defaultValue={
            searchParams.get("search") === null
              ? ""
              : searchParams.get("search").replaceAll("%", " ")
          }
          onChange={(e) => handle_input_search(e.target.value)}
          className="input-control w-full"
          placeholder="Search..."
          type="text"
        />
      </form>
      <PostGrid
        status={status}
        posts={posts.data}
        last_page={posts.last_page}
        showPagination={true}
      />
    </div>
  );
};

export default Posts;
