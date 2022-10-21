import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Home/NewsSummary";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1>This Category has News : {categoryNews.length}</h1>
      <div>
        {categoryNews.map((news) => (
          <NewsSummary key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Category;
