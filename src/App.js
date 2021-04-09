import React, { useState } from "react";
import "./styles.css";

const booksRecommend = {
  Selfhelp: [
    { name: "Think and Grow Rich ", rating: "4.2/5" },
    { name: "Deep Work", rating: "4/5" },
    { name: "Rich Dad Poor Dad", rating: "4.1/5" }
  ],
  Novel: [
    {
      name: "The Great Gatsby",
      rating: "3.9/5"
    },
    {
      name: "To Kill a Mockingbird",
      rating: "4.3/5"
    },
    {
      name: "Silent Patient",
      rating: "4.5/5"
    }
  ],
  Biographies: [
    {
      name: "Steve Jobs",
      rating: "4.1/5", 
    },

    {
      name: "Wings of Fire",
      rating: "4.6/5", 
    },
    {
      name: "Elon Musk by Ashlee Vance",
      rating: "4.3/5",
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Selfhelp");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>books Recommendation </h1>

      <div>
        {Object.keys(booksRecommend).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <br />
      <div className="books">
        <ul>
          {booksRecommend[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div> {book.name} </div>
              <div> {book.rating} </div> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
