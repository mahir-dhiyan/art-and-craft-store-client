
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
import ViewDetails from "../viewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateItem from "../myart/UpdateItem";
import SubCatView from "../home/craftSubcat/subCatView/SubCatView";

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
          element: <PrivateRoutes><AllArt></AllArt></PrivateRoutes>,
          loader: ()=> fetch("http://localhost:5000/art")
        },
        {
          path: "/myart",
          element: <PrivateRoutes><MyArt></MyArt></PrivateRoutes>,
        },
        {
          path: "/updateItem/:id",
          element: <PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
          loader: ()=> fetch("http://localhost:5000/art")
        },
        
        {
          path: "/addart",
          element: <PrivateRoutes><AddArt></AddArt></PrivateRoutes>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/subCatView/:name",
          element: <SubCatView></SubCatView>,
          loader: ()=>fetch("http://localhost:5000/art")
        },
        {
          path: "/viewDetails/:id",
          element: <ViewDetails></ViewDetails>,
          loader: ()=>fetch("http://localhost:5000/art")
        },
      ],
    },
  ]);


export default router;