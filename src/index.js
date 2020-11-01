import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
  },
];

// const names = ["name1", "name2", "name4"];
// const newNames = names.map((name) => {
//   console.log("name: ", name);
//   return <h1>{name}</h1>;
// });
// console.log('newNames: ', newNames)

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// const Book = (props) => {
//   console.log("props", props.book);
//   return (
//     <article className="book">
//       <img src={props.book.img} alt="" />
//       <h1>{props.book.title}</h1>
//       <h4>{props.book.author}</h4>
//     </article>
//   );
// };
const Book = (props) => {
  // const { img, title, author } = props.book;
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
