import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Profile from "../Others/Profile";
import TermsAndConditions from "../Others/TermsAndConditions";
import Category from "../Pages/Categories/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import News from "../Pages/News/News/News";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
