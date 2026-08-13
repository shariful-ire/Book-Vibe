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

      // ================= HOME =================

      {
        index: true,
        element: <HomePage />,
      },

      // ================= LISTED BOOKS =================

      {
        path: "listed-books",
        element: <ListedBooks />,
      },

      // ================= PAGES TO READ =================

      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },

      // ================= BOOK DETAILS =================

      {
        path: "book/:bookId",
        element: <BookDetails />,
      },

      // ================= 404 =================

      {
        path: "*",
        element: <ErrorPage />,
      },

    ],
  },
]);

export default router;