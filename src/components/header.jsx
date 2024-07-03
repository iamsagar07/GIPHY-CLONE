import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/giphy-context";
import GifSearch from "./GifSearch";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    const { fetchGIPHY, favorities } = GifState();

    const fetchCategories = async () => {
        const { data } = await fetchGIPHY.categories();
        setCategories(data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <nav>
            <div className="relative flex justify-between items-center mb-2">
                <Link className="flex gap-2" to={"/"}>
                    <img src="/logo.svg" alt="logo-giphy" className="w-8" />
                    <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
                        GIPHY
                    </h1>
                </Link>
                {/* Render Categories */}

                <div className="font-bold flex text-md gap-2 items-center">
                    {categories?.slice(0, 5)?.map((category, index) => (
                        <Link
                            key={index}
                            to={`/${category.name_encoded}`}
                            className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
                        >
                            {category.name}
                        </Link>
                    ))}

                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiEllipsisVertical
                            size={35}
                            className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""
                                } border-b-4 hidden lg:block`}
                        />
                    </button>

                    {favorities?.length > 0 && (
                        <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
                            <Link to={"/favourities"}>Favourte GIFs</Link>
                        </div>
                    )}
                    <button>
                        <HiMiniBars3BottomRight
                            className="text-sky block lg:hidden"
                            size={30}
                        />
                    </button>
                </div>
                {showCategories && (
                    <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
                        <span className="text-3xl font-extrabold">Categories</span>
                        <hr className="bg-gray-100 opacity-50 my-5" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            {categories?.map((category) => {
                                return (
                                    <Link
                                        to={`/${category.name_encoded}`}
                                        key={category.name}
                                        className="font-bold"
                                    >
                                        {category.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <GifSearch />
        </nav>
    );
};

export default Header;
