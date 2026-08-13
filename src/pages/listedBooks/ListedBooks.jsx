import React, { use } from "react";

const bookPromise = fetch("/data/booksData.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to load books data");
    }

    return res.json();
  });

const ListedBooks = () => {
  const books = use(bookPromise);

  return (
    <section className="py-10">

      {/* Header */}
      <div className="rounded-xl bg-gray-100 py-5 text-center">
        <h1 className="font-serif text-3xl font-bold text-gray-900">
          Listed Books
        </h1>
      </div>

      {/* Books */}
      <div className="mt-8 space-y-4">

        {books.map((book) => (
          <div
            key={book.bookId}
            className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center"
          >

            {/* Image */}
            <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-100 md:w-32">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-full w-auto object-contain p-3"
              />
            </div>

            {/* Information */}
            <div className="flex-1">

              <h2 className="font-serif text-xl font-bold text-gray-900">
                {book.bookName}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                By : {book.author}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {book.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                <span>
                  Category: {book.category}
                </span>

                <span>
                  Pages: {book.totalPages}
                </span>

                <span>
                  Rating: {book.rating}
                </span>

                <span>
                  Published: {book.yearOfPublishing}
                </span>
              </div>

              {/* Button */}
              <button
                className="mt-4 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-300"
              >
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ListedBooks;