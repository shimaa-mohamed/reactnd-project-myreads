import React, { Component } from "react";
class BookInfo extends Component {
  render() {
    const { book } = this.props;

    return (
      <div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map((auth) => <div key={auth}>{auth}</div>)}
        </div>
      </div>
    );
  }
}

export default BookInfo;
