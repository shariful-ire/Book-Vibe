import React, { use } from "react";

import Hero from "./Hero";
import BookCard from "../../components/book/bookCard/BookCard";

const bookPromise = fetch("/data/booksData.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to load books data");
    }

    return res.json();
  });

const HomePage = () => {
  const books = use(bookPromise);

  return (
    <div className="pb-16">

      {/* Hero Section */}
      <Hero />

      {/* Books Section */}
      <section className="mt-12">

        {/* Section Title */}
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900">
          Books
        </h2>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))}
        </div>

      </section>

    </div>
  );
};

export default HomePage;