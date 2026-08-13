import React, { use } from "react";

const bookPromise = fetch("/data/booksData.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to load books data");
    }

    return res.json();
  });

const PagesToRead = () => {
  const books = use(bookPromise);

  return (
    <section className="py-10">

      {/* Header */}
      <div className="rounded-xl bg-gray-100 py-5 text-center">
        <h1 className="font-serif text-3xl font-bold text-gray-900">
          Pages To Read
        </h1>
      </div>

      {/* Books */}
      <div className="mt-8 space-y-4">

        {books.map((book) => (
          <div
            key={book.bookId}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >

            <div>
              <h2 className="font-serif text-lg font-bold text-gray-900">
                {book.bookName}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {book.author}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">
                Total Pages
              </p>

              <p className="text-xl font-bold text-gray-900">
                {book.totalPages}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PagesToRead;