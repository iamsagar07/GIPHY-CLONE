import { Children, createContext, useContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const gifContext = createContext();

const GifProvider = ({ children }) => {
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorites, setFavorities] = useState([]);

    const fetchGIPHY = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    console.log("My key is ->", fetchGIPHY);
    return (
        <gifContext.Provider
            value={{ fetchGIPHY, gifs, setGifs, filter, setFilter, favorites }}
        >
            {children}
        </gifContext.Provider>
    );
};

export const GifState = () => {
    return useContext(gifContext);
};

export default GifProvider;
