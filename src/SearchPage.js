import React, { Component } from "react";
import BookComponent from "./BookComponent";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = { show: [] };
  render() {
    const { searchRes, testState, updateShelf, booksFromApi } = this.props;

    let show = [];
    if (testState.whatToView && testState.whatToView.length > 0) {
      testState.whatToView.forEach((sb) => {
        const shelfBooks = booksFromApi.filter((b) => b.id === sb.id);
        if (shelfBooks.length) {
          show.push(...shelfBooks);
        } else {
          sb.shelf = "none";
          show.push(sb);
        }
      });
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search">
            <Link to="/">back</Link>
          </div>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={testState.query}
              onChange={(e) => searchRes(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {testState.whatToView &&
              testState.whatToView.length > 0 &&
              show.map((book) => (
                <li key={book.id}>
                  <BookComponent updateShelf={updateShelf} bookprops={book} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
