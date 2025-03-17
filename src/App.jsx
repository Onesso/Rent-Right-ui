import Homepage from "./components/routes/homepage/homepage.jsx";
import Listpage from "./components/routes/listpage/listPage.jsx";
import Layout from "./components/routes/layout/layout";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
