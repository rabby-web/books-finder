import BooksAction from "./BooksAction";
import BooksCard from "./BooksCard";
import books from "../../public/books.json";
import { useState } from "react";

export default function AllBooks() {
  const [allBooks, setAllBooks] = useState(books);
  console.log(allBooks);

  function handleFavorite(bookId) {
    const bookIndex = allBooks.findIndex((book) => book.id === bookId);
    const newTasks = [...allBooks];
    newTasks[bookIndex].favorite = !newTasks[bookIndex].favorite;
    setAllBooks(newTasks);
  }

  function handleSearch(searchTerm) {
    console.log(searchTerm, "hh");
    const filtered = allBooks.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAllBooks([...filtered]);
  }

  return (
    <>
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <BooksAction onSearch={handleSearch}></BooksAction>
        </header>
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <BooksCard books={allBooks} onFav={handleFavorite}></BooksCard>
        </div>
      </main>
    </>
  );
}
