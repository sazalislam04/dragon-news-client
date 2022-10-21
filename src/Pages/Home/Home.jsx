import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "./NewsSummary";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h1>Dragon News</h1>
      <div className="">
        {allNews.map((news) => (
          <NewsSummary key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Home;
