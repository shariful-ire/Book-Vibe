import React from "react";

const BookCard = ({ book }) => {
  const {
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
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 p-5">
        <img
          src={image}
          alt={bookName}
          className="h-full w-auto object-contain"
        />
      </div>

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
      <h2 className="mt-3 line-clamp-1 font-serif text-lg font-bold text-gray-900">
        {bookName}
      </h2>

      {/* Author */}
      <p className="mt-1 text-sm text-gray-500">
        By : {author}
      </p>

      {/* Bottom Information */}
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

    </div>
  );
};

export default BookCard;