import Homepage from "./components/routes/homepage/homepage.jsx";
import Listpage from "./components/routes/listpage/listPage.jsx";
import Singlepage from "./components/routes/singlepage/singlepage.jsx";
import { Layout, RequireAuth } from "./components/routes/layout/layout";
import ProfilePage from "./components/routes/profilepage/profilePage.jsx";
import Register from "./components/routes/register/register.jsx";
import Login from "./components/routes/Loginpage/loginpage.jsx";
import About from "./components/routes/about/about.jsx";
import Contact from "./components/routes/contact/contact.jsx";
import Profileupdatepage from "./components/routes/profileupdatepage/profileupdatepage.jsx";
import NewPostPage from "./components/routes/newPostPage/newPostPage.jsx";
import PostUpdatePage from "./components/routes/postupdatepage/postupdatepage.jsx";
// import Payment from "./components/routes/paymentprocessing/payment.jsx";
import Dashboard from "./components/routes/dashboard/dashboard.jsx";
import PageNotFound from "../../tenant/src/components/routes/pagenotfound/pageNotFound.jsx";
import {
  singlePageLoader,
  listPageLoader,
  profilePageLoader,
} from "./lib/loaders.js";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <Singlepage />,
          loader: singlePageLoader,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <Profileupdatepage />,
        },
        {
          path: "/post/update/",
          element: <PostUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          loader: profilePageLoader,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
