import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // =====================================================
  // Fetch book
  // =====================================================

  useEffect(() => {
    fetch("/data/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedBook = data.find(
          (item) => String(item.bookId) === String(bookId)
        );

        setBook(selectedBook);
      });
  }, [bookId]);

  // =====================================================
  // Check localStorage status
  // =====================================================

  useEffect(() => {
    if (!book) return;

    const readBooks =
      JSON.parse(localStorage.getItem("readBooks")) || [];

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyRead = readBooks.some(
      (item) => String(item.bookId) === String(book.bookId)
    );

    const alreadyWishlisted = wishlist.some(
      (item) => String(item.bookId) === String(book.bookId)
    );

    setIsRead(alreadyRead);
    setIsWishlisted(alreadyWishlisted);
  }, [book]);

  // =====================================================
  // READ BOOK TOGGLE
  // =====================================================

  const handleReadBook = () => {
    if (!book) return;

    const readBooks =
      JSON.parse(localStorage.getItem("readBooks")) || [];

    const alreadyRead = readBooks.some(
      (item) => String(item.bookId) === String(book.bookId)
    );

    let updatedBooks;

    if (alreadyRead) {
      // REMOVE FROM READ BOOKS
      updatedBooks = readBooks.filter(
        (item) => String(item.bookId) !== String(book.bookId)
      );

      setIsRead(false);
    } else {
      // ADD TO READ BOOKS
      updatedBooks = [...readBooks, book];

      setIsRead(true);
    }

    localStorage.setItem(
      "readBooks",
      JSON.stringify(updatedBooks)
    );
  };

  // =====================================================
  // WISHLIST TOGGLE
  // =====================================================

  const handleWishlist = () => {
    if (!book) return;

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyWishlisted = wishlist.some(
      (item) => String(item.bookId) === String(book.bookId)
    );

    let updatedWishlist;

    if (alreadyWishlisted) {
      // REMOVE
      updatedWishlist = wishlist.filter(
        (item) => String(item.bookId) !== String(book.bookId)
      );

      setIsWishlisted(false);
    } else {
      // ADD
      updatedWishlist = [...wishlist, book];

      setIsWishlisted(true);
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  // =====================================================
  // Loading
  // =====================================================

  if (!book) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <section className="py-10">

      <div className="grid gap-10 md:grid-cols-2">

        {/* =================================================
            BOOK IMAGE
        ================================================= */}

        <div className="flex min-h-[500px] items-center justify-center rounded-2xl bg-gray-100 p-8">

          <img
            src={book.image}
            alt={book.bookName}
            className="max-h-[450px] max-w-full object-contain"
          />

        </div>

        {/* =================================================
            BOOK INFORMATION
        ================================================= */}

        <div>

          <h1 className="font-serif text-4xl font-bold text-gray-900">
            {book.bookName}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            By : {book.author}
          </p>

          <div className="my-5 border-y border-gray-200 py-4">
            <p className="text-gray-700">
              {book.category}
            </p>
          </div>

          <p className="leading-7 text-gray-600">
            <span className="font-bold text-gray-800">
              Review:
            </span>{" "}
            {book.review}
          </p>

          {/* TAGS */}

          <div className="mt-6 flex flex-wrap items-center gap-2">

            <span className="font-bold">
              Tag:
            </span>

            {book.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-2 text-sm text-green-600"
              >
                #{tag}
              </span>
            ))}

          </div>

          {/* BOOK INFO */}

          <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

            <p className="text-gray-600">
              Number of Pages:
              <span className="ml-3 font-semibold text-gray-900">
                {book.totalPages}
              </span>
            </p>

            <p className="text-gray-600">
              Publisher:
              <span className="ml-3 font-semibold text-gray-900">
                {book.publisher}
              </span>
            </p>

            <p className="text-gray-600">
              Year of Publishing:
              <span className="ml-3 font-semibold text-gray-900">
                {book.yearOfPublishing}
              </span>
            </p>

            <p className="text-gray-600">
              Rating:
              <span className="ml-3 font-semibold text-gray-900">
                {book.rating}
              </span>
            </p>

          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="mt-7 flex gap-3">

            {/* READ BUTTON */}

            <button
              onClick={handleReadBook}
              className={`rounded-lg border px-6 py-3 font-semibold transition ${
                isRead
                  ? "border-red-500 bg-red-500 text-white hover:bg-red-600"
                  : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {isRead ? "Remove from Read" : "Read"}
            </button>

            {/* WISHLIST BUTTON */}

            <button
              onClick={handleWishlist}
              className={`rounded-lg px-6 py-3 font-semibold text-white transition ${
                isWishlisted
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {isWishlisted
                ? "Remove from Wishlist"
                : "Wishlist"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookDetails;