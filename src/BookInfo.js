import React, { Component } from "react";
import ReactDOM from "react-dom";
class BookInfo extends Component {
  render() {
    const { book } = this.props;
    //  console.log(book);
    return (
      <div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.map((auth) => <div>{auth}</div>)}
        </div>
      </div>
    );
  }
}

export default BookInfo;
