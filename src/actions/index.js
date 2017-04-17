import $ from 'jquery';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const NEW_BOOK_INDEX = 'NEW_BOOK_INDEX';
export const NEW_BOOK_LIST = 'NEW_BOOK_LIST';
export const NEW_FAVORITE_BOOK = 'NEW_FAVORITE_BOOK';
export const REMOVE_FAVORITE_BOOK = 'REMOVE_FAVORITE_BOOK';

export function selectBook(book) {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}

export function setBookIndex(index) {
    return {
        type: NEW_BOOK_INDEX,
        payload: index
    }
}

export function setBookList(name) {
    var artist = name || "jojo moyes";
    var request = getBooksList(artist);
    return (dispatch) => {
        request.then(({results}) => {
            dispatch({
                type: NEW_BOOK_LIST,
                payload: results
            });
        });
    }
}


export function newFavoriteBook(book) {
    return {
        type: NEW_FAVORITE_BOOK,
        payload: book
    }
}

export function removeFavoriteBook(book) {
    return {
        type: REMOVE_FAVORITE_BOOK,
        payload: book
    }
}


function getBooksList(artistName) { //todo- add the ajax call
    let url = `https://itunes.apple.com/search?term=${artistName}&entity=ebook&limit=7`;

    return $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
    });
}