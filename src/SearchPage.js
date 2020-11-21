import React, { Component } from "react";
import BookComponent from "./BookComponent";
import * as BooksAPI from "./BooksAPI";
import { Route, BrowserRouter, Link } from "react-router-dom";

class SearchPage extends Component {
  state = { show: [] };
  render() {
    let displayResults = [];
    const { searchRes, testState, updateShelf, booksFromApi } = this.props;
    const emptyArr = [];
    // console.log(
    //   testState.whatToView.length === 0
    //     ? "zero"
    //     : testState.whatToView.map((e) => e.title)
    // );
    //const show = testState.query === "" ? emptyArr : testState.whatToView;
    // console.log("booksFromApi");
    //console.log(booksFromApi);
    //console.log("searchResult");
    // console.log(testState.whatToView);

    // lef 3ala kol el 7agat el m3molaha filter fel search
    // lef 3ala el kotob elel 3ndy fel shelves
    // filter mnhom el a7agt el moshtraka
    // 3del fel 7agat el moshtaraka ennaha tkon nfs el state bt3t el shelf
    // elle msh mwgod yb2a 7lto none

    let show = [];
    if (testState.whatToView && testState.whatToView.length > 0) {
      testState.whatToView.map((sb) => {
        const shelfBooks = booksFromApi.filter((b) => b.id === sb.id);
        // console.log(shelfBooks);
        if (shelfBooks.length) {
          //this.setState({show})
          show.push(...shelfBooks);
        } else {
          sb.shelf = "none";
          show.push(sb);
        }
      });
    }

    // testState.whatToView.forEach((sb) => {
    //   booksFromApi.forEach((b, idx, array) => {
    //     if (sb.id === b.id) {
    //       show.push(b);
    //     } else {
    //       if (idx === array.length - 1) {
    //         show.push(sb);
    //       }
    //     }
    //   });
    // });
    //console.log("show");
    //console.log("show :");
    console.log(show);

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
            {/* {testState.whatToView &&
              testState.whatToView.length > 0 &&
              testState.whatToView.forEach((book) => {
                // console.log(book.title + "    " + book.shelf);
              })} */}
            {testState.whatToView &&
              testState.whatToView.length > 0 &&
              show.map((book) => (
                <li>
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
