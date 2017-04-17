import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeFavoriteBook } from '../actions/index';

class FavoriteBooks extends Component {

    onClickRemove(book){
        this.props.removeFavoriteBook(book);
    }

    renderListItems() {
        return this.props.selected.map((book) => {
            return (
                <div className="item-list-group ListItem" key={book.trackId}>
                    <p>
                            {book.trackCensoredName}
                            <a onClick={this.onClickRemove.bind(this, book)}>
                                <span className="glyphiconColor glyphicon glyphicon-remove-circle pull-xs-right"></span>
                            </a>
                    </p>
                </div>

            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        selected: state.selected
    };
}

export default connect(mapStateToProps, {removeFavoriteBook})(FavoriteBooks);
