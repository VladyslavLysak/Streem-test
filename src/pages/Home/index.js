import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
    fetchUsers
} from '../../actions';

import {
    getUsers
} from '../../selectors';

import RenderUser from '../../components/Users/RenderUser';


const Home = (props) => {

    useEffect(() => {
        fetchAllUsers();
    }, [])

    const fetchAllUsers = async () => {
        await props.fetchUsers();
    }

    const { users } = props;

    return (
        <div className='home-container'>
            {users.map(user => <RenderUser user={user} key={user.id}/>)}
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