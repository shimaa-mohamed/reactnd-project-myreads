import React, { Component } from "react";


class DropDownBut extends Component {
  state = { selectValue: this.props.book.shelf };
  // componentDidMount() {
  //   console.log("ahoooooooooooooo");
  //   console.log(this.props.book.title + "   " + this.props.book.shelf);
  //   this.setState({ selectValue: this.props.book.shelf });
  // }

  changeValue = (e) => {
    this.setState({ selectValue: e.target.value });
    this.props.keepState(this.props.book, e.target.value);
    // this.setState({ selectValue: this.props.book.shelf });
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          //value={this.state.selectValue ? this.state.selectValue : "none"}
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
// function DropDownBut(props) {
//   if (props.title == "On Film") console.log(props.book.shelf);
//   return (
//     <div className="book-shelf-changer">
//       <select
//         value={props.book.shelf ? props.book.shelf : "none"}
//         onChange={(e) => props.keepState(props.book, e.target.value)}
//       >
//         <option value="move" disabled>
//           Move to...
//         </option>
//         <option value="currentlyReading">Currently Reading</option>
//         <option value="wantToRead">Want to Read</option>
//         <option value="read">Read</option>
//         <option value="none">None</option>
//       </select>
//     </div>
//   );
// }

// export default DropDownBut;
