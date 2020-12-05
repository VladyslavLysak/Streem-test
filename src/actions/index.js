import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from './actionTypes'

import {
    fetchUsers as fetchUsersApi
} from '../api';

export const fetchUsers = () => async dispatch => {
    dispatch({
        type: FETCH_USERS_START
    });

    try {
        const users = await fetchUsersApi();
        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: users
        });
    } catch (err) {
        dispatch({
            type: FETCH_USERS_FAILED,
            payload: err,
            error: true
        })
    }
}