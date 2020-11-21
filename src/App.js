import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import ShelfComponent from "./ShelfComponent";
import { Route, BrowserRouter } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./App.css";

class App extends Component {
  state = { books: [], query: "", whatToView: [], flag: false };

  componentDidMount() {
    BooksAPI.getAll().then((myarr) => this.setState({ books: myarr }));
  }

  searchRes = (myquery) => {
    this.setState({ query: myquery });

    BooksAPI.search(myquery).then((searchBooks) =>
      this.setState({ whatToView: searchBooks })
    );
  };
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      BooksAPI.getAll().then((myarr) => this.setState({ books: myarr }));
    });
  };

  render() {
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

export default App;
