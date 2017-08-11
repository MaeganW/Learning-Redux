import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title} className="list-group-item">
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of booklist
  return {
    books: state.books,
  };
}

// anything returned from this function will end up 
// as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of out selectors
  return bindActionCreators({ selectBook }, dispatch);
}

// promote BookList from a component to a container
// let's it know about the new dispatch method, selectBook
// Makes selectBook available as a prop to be called
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
