import * as R from 'ramda';

import {
    FETCH_USER_BY_ID_SUCCESS,
    FETCH_POSTS_BY_USER_SUCCESS
} from '../actions/actionTypes'

const initialState = {
    id: null,
    posts: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USER_BY_ID_SUCCESS:
            return R.merge(state, payload);
        case FETCH_POSTS_BY_USER_SUCCESS:
            return R.merge(state, {
                posts: payload
            });
        default:
            return state;
    }
}