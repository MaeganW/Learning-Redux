import React, { Component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    console.log(this.props.store);
    return (
        <div>
            <BookList />
        </div>
    );
  }
}
