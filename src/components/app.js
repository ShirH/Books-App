import React, { Component } from 'react';
import {connect} from 'react-redux';

import BookListNavigator from './book_list_navigator';
import BookDetail from './book_detail';
import FavoriteBooks from './favorite_books';
import SearchBar from './search_bar';
import {setBookList} from '../actions/index';

class App extends Component {

    componentWillMount() {
        this.props.setBookList();
    }

    render() {
        return (
            <div>
                <SearchBar />
                <div className="appContent">
                    <BookListNavigator side="left"/>
                    <BookDetail />
                    <BookListNavigator side="right"/>
                    <FavoriteBooks />
                </div>
            </div>
        );
    }
}

export default connect(null, {setBookList})(App);