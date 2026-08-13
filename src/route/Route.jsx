import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PagesToRead from "../pages/pages-to-read/PagesToRead";
import ListedBooks from "../pages/listedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "listed-books",
        element: <ListedBooks />,
      },
      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);

export default router;