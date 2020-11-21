import React, { Component } from "react";
import BookComponent from "./BookComponent";
import { Link } from "react-router-dom";

class ShelfComponent extends Component {
  render() {
    const { booksFromApi, shelfTitle, updateShelf } = this.props;
    let shelfName = "";
    if (shelfTitle === "Currently Reading") {
      shelfName = "currentlyReading";
    } else if (shelfTitle === "Want to read") {
      shelfName = "wantToRead";
    } else {
      shelfName = "read";
    }

    let booksInShelf = booksFromApi.filter((book) => book.shelf === shelfName);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksInShelf.map((book) => (
              <li key={book.id}>
                <BookComponent bookprops={book} updateShelf={updateShelf} />
              </li>
            ))}
          </ol>
        </div>

        <div className="open-search">
          <Link to="/search">add book</Link>
        </div>
      </div>

    
    );
  }
}

export default ShelfComponent;
