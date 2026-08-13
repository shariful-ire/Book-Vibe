import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

      {/* Book Image */}
      <Link to={`/book/${bookId}`}>
        <div className="flex h-64 cursor-pointer items-center justify-center rounded-lg bg-gray-100 p-5">
          <img
            src={image}
            alt={bookName}
            className="h-full w-auto object-contain"
          />
        </div>
      </Link>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <Link to={`/book/${bookId}`}>
        <h2 className="mt-3 cursor-pointer font-serif text-lg font-bold text-gray-900 hover:text-amber-600">
          {bookName}
        </h2>
      </Link>

      {/* Author */}
      <p className="mt-1 text-sm text-gray-500">
        By : {author}
      </p>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-300 pt-3">

        <p className="text-sm text-gray-600">
          {category}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">
            {rating}
          </span>

          <span className="text-2xl leading-none text-gray-600">
            ☆
          </span>
        </div>

      </div>

      {/* Details Button */}
      <Link
        to={`/book/${bookId}`}
        className="mt-4 block w-full rounded-lg bg-amber-400 py-2 text-center text-sm font-semibold text-gray-900 transition hover:bg-amber-300"
      >
        View Details
      </Link>

    </div>
  );
};

export default BookCard;