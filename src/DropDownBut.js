import React, { Component } from "react";

class DropDownBut extends Component {
  state = { selectValue: this.props.book.shelf };

  changeValue = (e) => {
    this.setState({ selectValue: e.target.value });
    this.props.keepState(this.props.book, e.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf}
          onChange={(e) => this.changeValue(e)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default DropDownBut;
