import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import ShelfComponent from "./ShelfComponent";
import { Route, BrowserRouter } from "react-router-dom";
import SearchPage from "./SearchPage";


class Test extends Component {
  state = { books: [], query: "", whatToView: [], flag: false };

  componentDidMount() {
    BooksAPI.getAll().then((myarr) => this.setState({ books: myarr }));
  }
  // componentDidUpdate() {
  //   if (this.state.flag) {
  //     this.setState((currentState) => ({ books: currentState }));
  //   }
  // }

  searchRes = (myquery) => {
    this.setState({ query: myquery });

    BooksAPI.search(myquery).then((searchBooks) =>
      this.setState({ whatToView: searchBooks })
    );
  };
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      //console.log(res);
      BooksAPI.getAll().then((myarr) => this.setState({ books: myarr }));
    });
    // BooksAPI.getAll().then((myarr) => this.setState({ books: myarr }));
   // this.setState({ flag: true });
  };

  render() {
    // this.setState((currentState) => ({ books: currentState }));
    //  this.setState({ flag: false });
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ShelfComponent
                booksFromApi={this.state.books}
                shelfTitle="Currently Reading"
                updateShelf={this.updateShelf}
              />
              <ShelfComponent
                booksFromApi={this.state.books}
                shelfTitle="Want to read"
                updateShelf={this.updateShelf}
              />
              <ShelfComponent
                booksFromApi={this.state.books}
                shelfTitle="Read"
                updateShelf={this.updateShelf}
              />
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              searchRes={this.searchRes}
              testState={this.state}
              updateShelf={this.updateShelf}
              booksFromApi={this.state.books}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default Test;
