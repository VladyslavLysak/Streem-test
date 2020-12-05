import * as R from 'ramda';

export const getUsers = state => R.values(state.Users);