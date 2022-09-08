import React, { useEffect, useState } from "react";
import PostGrid from "./PostGrid";
import { api } from "../../api";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
  /*_______ Hooks _______*/
  const [posts, setPosts] = useState({
    data: [],
    current_page: 1,
    total: 1,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setsearch] = useState("");
  const [page, setPage] = useState(searchParams.get("page") ?? 1);

  /*_______ useEffect _______*/

  useEffect(() => {
    async function fetch_posts() {
      let url = "/posts";

      if (search !== "") {
        url += `?search=${search}&page=${page}`;
      } else {
        url += `?page=${page}`;
      }

      const response = await api({
        method: "get",
        url: url,
      });

      setPosts(response.data);
      search !== "" && setSearchParams({ search: search });
      search !== "" && setSearchParams({ page: page });
    }

    fetch_posts();
  }, [search, setSearchParams, searchParams, page]);

  useEffect(() => {
    const search = searchParams.get("search") ?? false;

    if (search) {
      setsearch(search);
    }

    const page = searchParams.get("page") ?? false;

    if (page) {
      setPage(page);
    }
  }, [searchParams]);

  /*_______ Functions _______*/

  const handle_search = (value) => {
    setsearch(value);
  };

  const search_event = (event) => handle_search(event.target.value);

  /*_______ [JSX] _______*/
  return (
    <div className="container mx-auto pt-[60px]">
      <div className="bg-dark-blue rounded p-2 mt-4 mx-4 lg:mx-0">
        <input
          defaultValue={search}
          onChange={search_event}
          className="input-control w-full"
          placeholder="Search..."
          type="text"
        />
      </div>
      <PostGrid
        posts={posts.data}
        current_page={posts.current_page}
        last_page={posts.last_page}
        showPagination={true}
      />
    </div>
  );
};

export default Posts;
