import * as R from 'ramda';

export const getUserById = (state, id) => R.prop(id, state.users);

export const getUsers = state => R.values(state.users);