import React, { use } from "react";

const ListedBooks = ({ bookPromise }) => {
  const bookData = use(bookPromise);

  return (
    <div>
      The all listed books are here
      {JSON.stringify(bookData)}
    </div>
  );
};

export default ListedBooks;