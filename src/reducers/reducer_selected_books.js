import _ from 'lodash';
import {REMOVE_FAVORITE_BOOK,NEW_FAVORITE_BOOK} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case NEW_FAVORITE_BOOK:
            return _.concat(state, action.payload);
        case REMOVE_FAVORITE_BOOK:
            return  _.without(state, action.payload); //return new array
}
return state;
}