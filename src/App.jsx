import Homepage from "./components/routes/homepage/homepage.jsx";
import Listpage from "./components/routes/listpage/listPage.jsx";
import Singlepage from "./components/routes/singlepage/singlepage.jsx";
import Layout from "./components/routes/layout/layout";
import ProfilePage from "./components/routes/profilepage/profilePage.jsx";
import Register from "./components/routes/register/register.jsx";
import Login from "./components/routes/Loginpage/loginpage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        },
        {
          path: "/:id",
          element: <Singlepage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
