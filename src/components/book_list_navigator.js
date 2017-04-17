import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook, setBookIndex} from '../actions/index';
import {bindActionCreators} from 'redux'


class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            side: this.props.side,
            isAvailable: false
        };
    }

    isAvailable() {
        let index = this.props.books.bookIndex;
        return (this.props.side === "left") ? (index === 0) : (this.props.books.list.length - 1 === index);
    }

    changeBook() {
        let index = this.props.books.bookIndex;
        return (this.props.side === "left") ? (index - 1) : (index + 1);
    }

    renderButton() {
        this.isAvailable.bind(this);
        this.changeBook.bind(this);
        let isButtonAvailable = this.isAvailable();
        return (
            <img className= {`navigateButtons ${this.props.side === "left" ? 'pull-xs-right':''} ${isButtonAvailable ? 'disabled':''}`}
                 height="42" width="42" src={`http://alexoliveira.me/Hawaii/images/chevron-${this.props.side}.png`}
               onClick={isButtonAvailable ?() => {} : () => {
                 this.props.setBookIndex(this.changeBook());
                 this.props.selectBook(this.props.books.list[this.props.books.bookIndex]);
                 }}>
            </img>
        );
    }

    render() {
        return (
            <div className="col-sm-1">
                {this.renderButton()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {books: state.books};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook, setBookIndex: setBookIndex}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);