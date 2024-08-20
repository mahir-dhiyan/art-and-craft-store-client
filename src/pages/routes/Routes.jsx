
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../home/Home";
import ErrorPage from "../errorpage/ErrorPage";
import Register from "../register/Register";
import AllArt from "../allart/AllArt";
import MyArt from "../myart/MyArt";
import AddArt from "../addart/AddArt";
import Login from "../login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/allart",
          element: <AllArt></AllArt>,
        },
        {
          path: "/myart",
          element: <MyArt></MyArt>,
        },
        {
          path: "/addart",
          element: <AddArt></AddArt>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);


export default router;