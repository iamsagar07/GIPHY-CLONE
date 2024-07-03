import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/home";
import Categories from "./pages/categories";
import SingleGiphy from "./pages/single__giphy__page";
import Favourities from "./pages/favourties";
import GifProvider from "./context/giphy-context";
import SearchPage from "./pages/search";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:category",
          element: <Categories />,
        },
        {
          path: "/:type/:slug",
          element: <SingleGiphy />,
        },
        {
          path: "/favourities",
          element: <Favourities />,
        },
        {
          path: "/search/:query",
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
