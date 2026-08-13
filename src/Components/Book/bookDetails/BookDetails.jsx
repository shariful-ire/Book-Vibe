import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isListed, setIsListed] = useState(false);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    fetch("/data/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find(
          (item) => String(item.bookId) === String(bookId)
        );

        setBook(foundBook);
        setLoading(false);

        // Check localStorage
        const listedBooks =
          JSON.parse(localStorage.getItem("listedBooks")) || [];

        const readBooks =
          JSON.parse(localStorage.getItem("readBooks")) || [];

        setIsListed(
          listedBooks.some(
            (item) => String(item.bookId) === String(bookId)
          )
        );

        setIsRead(
          readBooks.some(
            (item) => String(item.bookId) === String(bookId)
          )
        );
      })
      .catch(() => {
        setLoading(false);
      });
  }, [bookId]);

  // -------------------------
  // Add to Listed Books
  // -------------------------
  const handleAddToListed = () => {
    const listedBooks =
      JSON.parse(localStorage.getItem("listedBooks")) || [];

    const alreadyExists = listedBooks.some(
      (item) => String(item.bookId) === String(book.bookId)
    );

    if (alreadyExists) {
      return;
    }

    const updatedBooks = [...listedBooks, book];

    localStorage.setItem(
      "listedBooks",
      JSON.stringify(updatedBooks)
    );

    setIsListed(true);
  };

  // -------------------------
  // Mark as Read
  // -------------------------
  const handleMarkAsRead = () => {
    const readBooks =
      JSON.parse(localStorage.getItem("readBooks")) || [];

    const alreadyRead = readBooks.some(
      (item) => String(item.bookId) === String(book.bookId)
    );

    if (alreadyRead) {
      return;
    }

    const updatedBooks = [...readBooks, book];

    localStorage.setItem(
      "readBooks",
      JSON.stringify(updatedBooks)
    );

    setIsRead(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading book...
        </p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Book Not Found
        </h1>

        <Link
          to="/"
          className="mt-5 rounded-lg bg-amber-400 px-5 py-2 font-semibold"
        >
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-10">

      <div className="grid gap-8 rounded-2xl border border-gray-200 p-6 md:grid-cols-2">

        {/* Image */}
        <div className="flex min-h-[450px] items-center justify-center rounded-xl bg-gray-100 p-8">
          <img
            src={book.image}
            alt={book.bookName}
            className="max-h-[400px] w-auto object-contain"
          />
        </div>

        {/* Details */}
        <div>

          <h1 className="font-serif text-4xl font-bold text-gray-900">
            {book.bookName}
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            By : {book.author}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="mt-6">
            <h2 className="text-xl font-bold">
              Review
            </h2>

            <p className="mt-2 leading-7 text-gray-600">
              {book.review}
            </p>
          </div>

          {/* Book Information */}
          <div className="mt-6 space-y-2 border-t border-dashed border-gray-300 pt-5">

            <p>
              <span className="font-semibold">
                Category:
              </span>{" "}
              {book.category}
            </p>

            <p>
              <span className="font-semibold">
                Total Pages:
              </span>{" "}
              {book.totalPages}
            </p>

            <p>
              <span className="font-semibold">
                Publisher:
              </span>{" "}
              {book.publisher}
            </p>

            <p>
              <span className="font-semibold">
                Published:
              </span>{" "}
              {book.yearOfPublishing}
            </p>

            <p>
              <span className="font-semibold">
                Rating:
              </span>{" "}
              ⭐ {book.rating}
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <button
              onClick={handleAddToListed}
              disabled={isListed}
              className={`rounded-lg px-5 py-3 font-semibold ${
                isListed
                  ? "cursor-not-allowed bg-gray-300 text-gray-600"
                  : "bg-amber-400 text-gray-900 hover:bg-amber-300"
              }`}
            >
              {isListed
                ? "Already Listed"
                : "Add to Listed Books"}
            </button>

            <button
              onClick={handleMarkAsRead}
              disabled={isRead}
              className={`rounded-lg px-5 py-3 font-semibold ${
                isRead
                  ? "cursor-not-allowed bg-gray-300 text-gray-600"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {isRead ? "Already Read" : "Mark as Read"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookDetails;