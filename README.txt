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














