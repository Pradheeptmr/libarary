import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Category from "./Category";
const categories = [
  {
    id: "b1",
    title: "Don Quixote",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "12.4",
    author: "Miguel de Cervantes",
    publishedDate: "1605",
    img: "https://kbimages1-a.akamaihd.net/b2ece927-6fe1-40fd-8ee2-681e9c3fe4c3/353/569/90/False/don-quixote-101.jpg",
  },
  {
    id: "b2",
    title: "In Search of Lost Time",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "10.7",
    author: "Marcel Proust",
    publishedDate: "1913",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325095874l/13329904.jpg",
  },
  {
    id: "b3",
    title: "Ulysses",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "7.5",
    author: "James Joyce",
    publishedDate: "1904",
    img: "https://images.theconversation.com/files/443450/original/file-20220131-118143-cljnde.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: "b4",
    title: "One Hundred Years of Solitude",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "16",
    author: "Gabriel Garcia Marquez",
    publishedDate: "1913",
    img: "https://books-library.net/files/books-library.online-12201439Vj7R1.jpg",
  },
  {
    id: "b5",
    title: "The Great Gatsby",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "10.7",
    author: "Scott Fitzgerald",
    publishedDate: "1925",
    img: "https://m.media-amazon.com/images/I/81KbBmPGHVL.jpg",
  },
  {
    id: "b6",
    title: "Don Quixote",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "12.4",
    author: "Miguel de Cervantes",
    publishedDate: "1605",
    img: "https://kbimages1-a.akamaihd.net/b2ece927-6fe1-40fd-8ee2-681e9c3fe4c3/353/569/90/False/don-quixote-101.jpg",
  },
  {
    id: "b7",
    title: "In Search of Lost Time",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "10.7",
    author: "Marcel Proust",
    publishedDate: "1913",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325095874l/13329904.jpg",
  },
  {
    id: "b8",
    title: "Ulysses",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "7.5",
    author: "James Joyce",
    publishedDate: "1904",
    img: "https://images.theconversation.com/files/443450/original/file-20220131-118143-cljnde.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: "b9",
    title: "One Hundred Years of Solitude",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "16",
    author: "Gabriel Garcia Marquez",
    publishedDate: "1913",
    img: "https://books-library.net/files/books-library.online-12201439Vj7R1.jpg",
  },
  {
    id: "b10",
    title: "The Great Gatsby",
    description:
      "Lorem ipsum dolor sit amet consec, adipisicing elit. Accusamus, pariatur!",
    price: "10.7",
    author: "Scott Fitzgerald",
    publishedDate: "1925",
    img: "https://m.media-amazon.com/images/I/81KbBmPGHVL.jpg",
  },
];

const Categories = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Search for the book.
  let searchedBook = [];
  const searchedBookHandler = (event) => {
    searchedBook = categories.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(event.target.value.trim().toLocaleLowerCase())
    );
    setFilteredBooks(searchedBook);
  };

  // Render all books using MAP:
  const allBooks = categories.map((book) => (
    <Category
      key={book.id}
      title={book.title}
      description={book.description}
      author={book.author}
      price={book.price}
      date={book.publishedDate}
      img={book.img}
    />
  ));

  // Render FilteredBooks using MAP:
  const searchedBooks = filteredBooks.map((book) => (
    <Category
      key={book.id}
      title={book.title}
      description={book.description}
      author={book.author}
      price={book.price}
      date={book.publishedDate}
      img={book.img}
    />
  ));

  // Choose which books array will be rendered:
  const existingBooks = filteredBooks.length > 0 ? searchedBooks : allBooks;

  return (
    <div className="flex flex-col items-center gap-12 my-12">
      <div className="w-1/3 relative flex gap-4">
        <input
          onChange={searchedBookHandler}
          type="search"
          className="w-full py-2 pl-6 outline-none border-b-2 border-blue-600 caret-blue-600 font-bold"
          placeholder="Search for a book by its name"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-blue-600 absolute top-1/4 left-0"
        />
      </div>
      <div className="categories flex flex-wrap gap-16 mx-auto justify-center">
        {existingBooks}
      </div>
    </div>
  );
};

export default Categories;