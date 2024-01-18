import book from "../assets/book.png";
import star from "../assets/star.svg";
import BooksAction from "./BooksAction";
import BooksCard from "./BooksCard";

export default function AllBooks() {
  return (
    <>
      <main className="my-10 lg:my-14">
        {/* <!-- header --> */}
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <BooksAction></BooksAction>
        </header>
        {/* <!-- header ends --> */}
        {/* <!-- Book Grid --> */}
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <!-- Book Item --> */}
          <BooksCard></BooksCard>
        </div>
        {/* <!-- Book Grid Ends --> */}
      </main>
    </>
  );
}
