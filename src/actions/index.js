import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_BY_ID_START,
    FETCH_USER_BY_ID_SUCCESS,
    FETCH_USER_BY_ID_FAILED,
    FETCH_POSTS_BY_USER_START,
    FETCH_POSTS_BY_USER_SUCCESS,
    FETCH_POSTS_BY_USER_FAILED
} from './actionTypes'

import {
    fetchUsers as fetchUsersApi,
    fetchUserById as fetchUserByIdApi,
    fetchPosts as fetchPostsApi
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

export const fetchUserById = id => async dispatch => {
    dispatch({
        type: FETCH_USER_BY_ID_START
    });

    try {
        const user = await fetchUserByIdApi(id);
        dispatch({
            type: FETCH_USER_BY_ID_SUCCESS,
            payload: user
        });
    } catch (err) {
        dispatch({
            type: FETCH_USER_BY_ID_FAILED,
            payload: err,
            error: true
        });
    }
}

export const fetchPopsts = id => async dispatch => {
    dispatch({
        type: FETCH_POSTS_BY_USER_START
    });

    try {
        const posts = await fetchPostsApi(id);
        dispatch({
            type: FETCH_POSTS_BY_USER_SUCCESS,
            payload: posts
        });
    } catch (err) {
        dispatch({
            type: FETCH_POSTS_BY_USER_FAILED,
            payload: err,
            error: true
        });
    }
}