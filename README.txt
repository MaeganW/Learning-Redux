****MY NOTES****

Base boilerplate cloned from Stephen Grider's ReduxSimpleStarter repo

---- REDUCERS ----

A reducer is a function that returns a piece of an application's state.

Our application can have many different pieces of state, therefore we can have many different reducers.

Reducers produce the value of our state.
 
The keys can be called whatever.  The only thing that really matters to the reducer is it's value - the value of its state.

EXAMPLE:

function () {
    return [
        {title: 'You Don't know JS'},
        {title: 'Harry Potter'},
        {title: 'The Ultimate Cookbook'},
        {title: 'Eloquent Javascript'}
    ]
}

---- REDUX AND REACT ----

They are two separate libraries.

To use redux with react, you will need to...

npm install react-redux --save-dev

---- CONTAINERS ----

AKA "smart components"

"A container is a react component that has a direct connection to the state managed by redux."

A promoted component, if you will.

"In general you want the most-parent-component that cares about a particular piece of state to be a container." - That isn't necessarily the app component.  App doesn't care about when a book changes - only BookList does.

App only cares about telling components to render to the page.

App in this case does not need to be connected to redux.




DUMB COMPONENT: (no redux)

import React, {Component} from 'react';

export default class BookList extends Component {
    renderList(){
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }
    
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}



SMART COMPONENT:  (with redux)


import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }
    
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //whatever is returned will show up as
    //props inside of BookList
    //usually we return an object
    return {
        //we want Harry Potter, etc.
        //REMEMBER the value is the state
        books: state.books;
    }
}

//exports this container
export default connect(mapStateToProps)(BookList);







---- CONNECT FUNCTION ----

The connect()() function takes a function and a component and produces a container









