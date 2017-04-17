import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { newFavoriteBook, removeFavoriteBook } from '../actions/index';

class BookDetail extends Component {

    handlePostSelect(activeBook, event) {
        const { newFavoriteBook, removeFavoriteBook } = this.props;
        event.target.checked ? newFavoriteBook(activeBook) : removeFavoriteBook(activeBook);
    }

    //activeBook={
    //        "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Publication60/v4/d5/dd/ca/d5ddca6a-f44b-4530-6e7f-437ab8f7f4ab/source/60x60bb.jpg",
    //        "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Publication60/v4/d5/dd/ca/d5ddca6a-f44b-4530-6e7f-437ab8f7f4ab/source/100x100bb.jpg",
    //        "artistViewUrl": "https://itunes.apple.com/us/artist/jojo-moyes/id252160838?mt=11&uo=4",
    //        "trackViewUrl": "https://itunes.apple.com/us/book/after-you/id967912464?mt=11&uo=4",
    //        "trackCensoredName": "After You",
    //        "fileSizeBytes": 2145544,
    //        "currency": "USD",
    //        "description": "<b>The sequel to <i>Me Before You</i>, which is now a major motion picture.&#xa0;<b>Look out for Jojo’s new book, <i>Paris for One and Other Stories</i>, available now.<br /></b><i><br /></i>“We all lose what we love at some point, but in her poignant, funny way, Moyes reminds us that even if it’s not always happy, there is an ever after.” —<i>Miami Herald<br /></i></b><i><br />“You’re going to feel uncomfortable in your new world for a bit. But I hope you feel a bit exhilarated too. Live boldly. Push yourself. Don’t settle. Just live well. Just live. Love, Will.”</i><br /><b> &#xa0;</b><br /> How do you move on after losing the person you loved? How do you build a life worth living?<br /> &#xa0;<br /> Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent with Will Traynor, she is struggling without him. When an extraordinary accident forces Lou to return home to her family, she can’t help but feel she’s right back where she started.<br /> &#xa0;<br /> Her body heals, but Lou herself knows that she needs to be kick-started back to life. Which is how she ends up in a church basement with the members of the Moving On support group, who share insights, laughter, frustrations, and terrible cookies. They will also lead her to the strong, capable Sam Fielding—the paramedic, whose business is life and death, and the one man who might be able to understand her. Then a figure from Will’s past appears and hijacks all her plans, propelling her into a very different future. . . .<br /> &#xa0;<br /> For Lou Clark, life after Will Traynor means learning to fall in love again, with all the risks that brings. But here Jojo Moyes gives us two families, as real as our own, whose joys and sorrows will touch you deeply, and where both changes and surprises await.<br /><br /><i>From the Hardcover edition.</i>",
    //        "artistId": 252160838,
    //        "artistName": "Jojo Moyes",
    //        "genres": [
    //        "Fiction & Literature",
    //            "Books",
    //            "Romance",
    //            "Contemporary"
    //          ],
    //        "kind": "ebook",
    //        "price": 9.99,
    //        "trackId": 967912464,
    //        "trackName": "After You",
    //        "releaseDate": "2015-09-29T07:00:00Z",
    //        "formattedPrice": "$9.99",
    //        "artistIds": [
    //         252160838
    //          ],
    //            "genreIds": [
    //              "9031",
    //              "38",
    //               "9003",
    //               "10057"
    //          ],
    //         "averageUserRating": 4.5,
    //        "userRatingCount": 3412
    //    }
    // }

    createMarkup(activeBook){
        return {__html: activeBook.description};
    }

    isChecked(that, activeBook){
        return _.findIndex(that.props.selected, ["trackId", activeBook.trackId])!==-1;
    }

    render() {
        let activeBook = this.props.books.activeBook;
        if (!activeBook) {
            return <div> No books to display </div>;
        }
        return (
            <div className="col-sm-6 box">
                <div className="headerDetails">
                    <h3>{activeBook.trackCensoredName}</h3>
                    <span className="checkbox pull-xs-right">
                        <input
                            checked={this.isChecked(this, activeBook)}
                            type="checkbox"
                            onChange={this.handlePostSelect.bind(this, activeBook)}/>
                    </span>
                </div>
                <h4>{activeBook.artistName}</h4>
                <div dangerouslySetInnerHTML={this.createMarkup(activeBook)}/>
                <div>Rating: {activeBook.averageUserRating}</div>
                <div>Price: {activeBook.price}$</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        books: state.books,
        selected: state.selected
    };
}

export default connect(mapStateToProps, {newFavoriteBook, removeFavoriteBook})(BookDetail);
