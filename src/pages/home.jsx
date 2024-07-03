import  { useEffect, useState } from "react";
import { GifState } from "../context/giphy-context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const { fetchGIPHY, filter } = GifState();

  const fethTrendingGifs = async () => {
    const { data } = await fetchGIPHY.trending({
      limit: 50,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };

  useEffect(() => {
    fethTrendingGifs();
  }, []);

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />

      {/* filter gifs */}
      <FilterGif showTrending={true} />

      {/* massonary layout below */}
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif, i) => {
          return <Gif gif={gif} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
