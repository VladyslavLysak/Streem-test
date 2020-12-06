import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from './users';
import userPage from './userPage';

export default history => combineReducers({
    users,
    userPage,
    router: connectRouter(history)
})