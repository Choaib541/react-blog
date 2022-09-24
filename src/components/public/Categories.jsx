import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="flex text-center bg-dark-blue rounded p-8 flex-wrap">
      {categories.data.map((e) => (
        <a
          href={`/posts?search=${e.name}`}
          key={e.id}
          className="bg-gray py-1 px-2 text-dark-blue rounded mr-1 mb-1"
        >
          {e.name} ({e.posts_count})
        </a>
      ))}
    </div>
  );
};

export default Categories;
