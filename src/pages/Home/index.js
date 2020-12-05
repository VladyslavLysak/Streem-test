import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
    fetchUsers
} from '../../actions';

import {
    getUsers
} from '../../selectors';


const Home = (props) => {

    useEffect(() => {
        fetchAllUsers();
    }, [])

    const fetchAllUsers = async () => {
        await props.fetchUsers();
    }

    return (
        <div>
            home
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: getUsers(state)
});

const mapDispatchToProps = {
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);