import React, { useEffect, useState } from "react";
import { GifState } from "../context/giphy-context";
import { useParams } from "react-router-dom";
import FilterGif from "../components/FilterGif";
import Gif from "../components/Gif";
import FollowOn from "../components/FollowOn";

const Categories = () => {
  const [categoryResult, setCategoryResult] = useState([]);

  const { fetchGIPHY } = GifState();

  const { category } = useParams();

  const fetchCategoryGifs = async () => {
    const { data } = await fetchGIPHY.gifs(category, category);

    setCategoryResult(data);
  };

  useEffect(() => {
    fetchCategoryGifs();
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {categoryResult.length > 0 && <Gif gif={categoryResult[0]} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <FollowOn />
        <div className="w-full h-0.5 mt-6 bg-gray-800" />
      </div>

      <div className="">
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join("&")}
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>

        {categoryResult.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
            {categoryResult.slice(1).map((gif, i) => {
              return <Gif gif={gif} key={i} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
