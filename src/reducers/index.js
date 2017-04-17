import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import BooksSelectedReducer from './reducer_selected_books';

const rootReducer = combineReducers({
    books: BooksReducer,
    selected: BooksSelectedReducer
});

export default rootReducer;
