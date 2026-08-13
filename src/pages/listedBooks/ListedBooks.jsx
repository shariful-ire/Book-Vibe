import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // =====================================================
  // Load books from localStorage
  // =====================================================

  useEffect(() => {
    const readBooks =
      JSON.parse(localStorage.getItem("readBooks")) || [];

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    if (activeTab === "read") {
      setBooks(readBooks);
    } else {
      setBooks(wishlist);
    }
  }, [activeTab]);

  // =====================================================
  // Sorting
  // =====================================================

  const handleSort = (value) => {
    setSortBy(value);

    const sortedBooks = [...books];

    if (value === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    if (value === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    }

    if (value === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    setBooks(sortedBooks);
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <section className="min-h-screen py-8 md:py-10">

      {/* =================================================
          PAGE TITLE
      ================================================= */}

      <div className="rounded-2xl bg-gray-100 py-7 text-center">

        <h1 className="font-serif text-2xl font-bold text-gray-900 md:text-3xl">
          Books
        </h1>

      </div>

      {/* =================================================
          SORT BUTTON
      ================================================= */}

      <div className="my-7 flex justify-center">

        <div className="dropdown">

          <button
            tabIndex={0}
            className="btn border-none bg-green-500 px-7 text-white hover:bg-green-600"
          >
            {sortBy === "rating"
              ? "Rating"
              : sortBy === "pages"
              ? "Pages"
              : sortBy === "year"
              ? "Publishing Year"
              : "Sort By"}

            <span className="ml-2 text-lg">⌄</span>
          </button>

          <ul
            tabIndex={0}
            className="dropdown-content menu z-[10] mt-2 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-xl text-blue-950"
          >

            <li>
              <button onClick={() => handleSort("rating")}>
                Rating
              </button>
            </li>

            <li>
              <button onClick={() => handleSort("pages")}>
                Number of Pages
              </button>
            </li>

            <li>
              <button onClick={() => handleSort("year")}>
                Publishing Year
              </button>
            </li>

          </ul>

        </div>

      </div>

      {/* =================================================
          TABS
      ================================================= */}

      <div className="border-b border-gray-300">

        <div className="flex gap-1">

          {/* Read Books */}

          <button
            onClick={() => setActiveTab("read")}
            className={`rounded-t-lg border border-b-0 px-5 py-3 text-sm font-medium transition ${
              activeTab === "read"
                ? "border-gray-300 bg-white text-gray-700"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            Read Books
          </button>

          {/* Wishlist Books */}

          <button
            onClick={() => setActiveTab("wishlist")}
            className={`rounded-t-lg border border-b-0 px-5 py-3 text-sm font-medium transition ${
              activeTab === "wishlist"
                ? "border-gray-300 bg-white text-gray-700"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            Wishlist Books
          </button>

        </div>

      </div>

      {/* =================================================
          BOOK LIST
      ================================================= */}

      <div className="mt-6 space-y-5">

        {books.length === 0 ? (

          // =================================================
          // EMPTY STATE
          // =================================================

          <div className="rounded-xl border border-gray-200 py-16 text-center">

            <h2 className="font-serif text-2xl font-bold text-gray-800">
              {activeTab === "read"
                ? "No Read Books"
                : "No Wishlist Books"}
            </h2>

            <p className="mt-2 text-gray-500">
              {activeTab === "read"
                ? "You haven't added any books to your read list yet."
                : "You haven't added any books to your wishlist yet."}
            </p>

            <Link
              to="/"
              className="mt-5 inline-block rounded-lg bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
            >
              Explore Books
            </Link>

          </div>

        ) : (

          // =================================================
          // BOOKS
          // =================================================

          books.map((book) => (

            <div
              key={book.bookId}
              className="rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md md:p-5"
            >

              <div className="flex flex-col gap-5 md:flex-row">

                {/* =================================================
                    BOOK IMAGE
                ================================================= */}

                <Link
                  to={`/book/${book.bookId}`}
                  className="flex h-44 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 p-4 md:h-44 md:w-48"
                >

                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-full w-auto object-contain transition duration-300 hover:scale-105"
                  />

                </Link>

                {/* =================================================
                    BOOK INFORMATION
                ================================================= */}

                <div className="flex-1">

                  {/* Book Name */}

                  <Link to={`/book/${book.bookId}`}>

                    <h2 className="font-serif text-xl font-bold text-gray-900 hover:text-green-500 md:text-2xl">
                      {book.bookName}
                    </h2>

                  </Link>

                  {/* Author */}

                  <p className="mt-2 text-sm text-gray-600">
                    By :{" "}
                    <span className="font-medium text-gray-700">
                      {book.author}
                    </span>
                  </p>

                  {/* =================================================
                      TAGS + YEAR
                  ================================================= */}

                  <div className="mt-4 flex flex-wrap items-center gap-2">

                    <span className="font-bold text-gray-800">
                      Tag
                    </span>

                    {book.tags?.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                      >
                        #{tag}
                      </span>

                    ))}

                    <span className="ml-1 text-sm text-gray-500">
                      ⊙
                    </span>

                    <span className="text-sm text-gray-500">
                      Year of Publishing: {book.yearOfPublishing}
                    </span>

                  </div>

                  {/* =================================================
                      PUBLISHER + PAGES
                  ================================================= */}

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-500">

                    <span>
                      ♧ &nbsp; Publisher:{" "}
                      <span className="font-medium">
                        {book.publisher}
                      </span>
                    </span>

                    <span>
                      ▣ &nbsp; Page {book.totalPages}
                    </span>

                  </div>

                  {/* =================================================
                      DIVIDER
                  ================================================= */}

                  <div className="my-4 border-t border-gray-200"></div>

                  {/* =================================================
                      BOTTOM INFO
                  ================================================= */}

                  <div className="flex flex-wrap items-center gap-3">

                    {/* Category */}

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-500">
                      Category: {book.category}
                    </span>

                    {/* Rating */}

                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm text-orange-400">
                      Rating: {book.rating}
                    </span>

                    {/* View Details */}

                    <Link
                      to={`/book/${book.bookId}`}
                      className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
};

export default ListedBooks;