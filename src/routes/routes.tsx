import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { MoreBlogs } from "../pages/moreBlogs";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/blogs",
      element: <MoreBlogs></MoreBlogs>,
    },
  ],
  { basename: "/" },
);
