import {BOOK_SELECTED, NEW_BOOK_INDEX, NEW_BOOK_LIST} from '../actions/index'

const INITIAL_STATE = {activeBook: null, bookIndex: 0, list: []}; //todo

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case BOOK_SELECTED:
            return {...state, activeBook: action.payload};
        case NEW_BOOK_INDEX:
            return {...state, bookIndex: action.payload};
        case NEW_BOOK_LIST:
            return {...state, list: action.payload, activeBook:action.payload[0], bookIndex: 0};
    }
    return state;
}