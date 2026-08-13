import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/homePage/HomePage";
import ListedBooks from "../pages/listedBooks/ListedBooks";
import PagesToRead from "../pages/pages-to-read/PagesToRead";
import BookDetails from "../components/book/bookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "listed-books",
        element: <ListedBooks />,
      },

      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },

      // Dynamic Book Details
      {
        path: "book/:bookId",
        element: <BookDetails />,
      },

      // 404
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;