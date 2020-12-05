import React from 'react';
import { Link } from 'react-router-dom';

const RenderUser = ({ user }) => {

    return (
        <div className='user-container'>
            <Link to={`/user/${user.id}`}>
                <ul>
                    <li>
                        <img
                            className='user-avatar'
                            src={user.avatar}
                            alt={user.name}
                        />
                    </li>
                    <li>
                        <h6>
                            {user.name}
                        </h6>
                    </li>
                    <li>
                        <h6>
                            {user.city}
                        </h6>
                    </li>
                    <li>
                        <h6>
                            {user.role}
                        </h6>
                    </li>
                    <li>
                        <h6>
                            {user.phone}
                        </h6>
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default RenderUser;