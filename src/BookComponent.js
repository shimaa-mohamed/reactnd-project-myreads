import React, { Component } from "react";

import BookInfo from "./BookInfo";
import DropDownBut from "./DropDownBut";

class BookComponent extends Component {
  render() {
    const { bookprops } = this.props;

    return (
      <div className="book">
        {bookprops.imageLinks && (
          <div>
            {" "}
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${bookprops.imageLinks.thumbnail})`,
                }}
              />
              <DropDownBut
                book={this.props.bookprops}
                keepState={this.props.updateShelf}
              />
            </div>
            <BookInfo book={bookprops} />
          </div>
        )}
        {!bookprops.imageLinks && (
          <div>
            {" "}
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${bookprops.imageLinks})`,
                }}
              />
              <DropDownBut
                book={bookprops}
                keepState={this.props.updateShelf}
              />
            </div>
            <BookInfo book={bookprops} />
          </div>
        )}
      </div>
    );
  }
}

export default BookComponent;
