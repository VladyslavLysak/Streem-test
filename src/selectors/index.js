import * as R from 'ramda';

export const getUserById = state => state.userPage;
export const getPopstsById = state => state.userPage.posts;

export const getUsers = state => R.values(state.users);