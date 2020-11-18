import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import BookInfo from "./BookInfo";
import DropDownBut from "./DropDownBut";

class BookComponent extends Component {
  // state = { bookstate: "" };
  // handleSelect = (e) => {
  //   this.setState({ bookstate: e.target.value });
  //   //console.log(this.props.bookprops + this.state.bookstate);

  //   //this.props.updateShelf(this.props.bookprops, this.state.bookstate);
  // };
  // // this.props.bookprops.shelf
  // componentDidUpdate() {
  //   this.props.updateShelf(this.props.bookprops, this.state.bookstate);
  //   console.log(this.state.bookstate);
  // }

  render() {
    const { bookprops } = this.props;
    // console.log(this.props.bookprops);
    // console.log(this.state.bookstate);
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
