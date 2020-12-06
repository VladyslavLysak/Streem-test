import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Form } from 'react-bootstrap';

import { fetchUserById, fetchPopsts } from '../../actions';
import { getUserById, getPopstsById } from '../../selectors';
import { createPost } from '../../api';

const User = (props) => {

    const [userId, setUserId] = useState(props.location.pathname.slice(6));

    const [form, setForm] = useState({
        id: Math.floor(Math.random() * 100000),
        userId: props.location.pathname.slice(6),
        createdAt: new Date(),
        editedAt: new Date(),
        image: '',
        content: '',

    });

    useEffect(() => {
        fetchThisUserById();
    }, []);

    const fetchThisUserById = async () => {
        await props.fetchUserById(userId);
        await props.fetchPopsts(userId);
    };

    const changeHandler = async event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await createPost({ ...form }, userId)
                .then(res => {
                    window.location.href = `/user/${userId}`;
                });

        } catch (e) { }
    };

    const { user, posts } = props;

    const rednerPost = post => {
        return (
            <div className='user-page-post-container' key={post.id}>
                <div className='user-page-post'>
                    <ul>
                        <li>
                            <img
                                className='post-image'
                                src={post.image}
                                alt={post.image}
                            />
                        </li>
                        <li>
                            <h6>
                                {post.content}
                            </h6>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className='user-page-container'>
            <div className='user-page-person'>
                <div className='user-avatar-container'>
                    <img
                        className='user-avatar'
                        src={user.avatar}
                        alt={user.name}
                    />
                </div>
                <div className='user-infromation-container'>
                    <h2>
                        {user.name}
                    </h2>
                    <ul>
                        <li>
                            <h5>
                                Role
                            </h5>
                        </li>
                        <li>
                            <h5>{user.role}</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>Phone</h5>
                        </li>
                        <li>
                            <h5>{user.phone}</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>City</h5>
                        </li>
                        <li>
                            <h5>{user.city}</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='user-page-posts-container'>
                <div className='user-page-posts'>
                    {posts.map(post => rednerPost(post))}
                </div>
                <div className='user-page-add-post'>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formGridPost">
                            <Form.Control as="textarea" name="content" placeholder="Write your post here" onChange={changeHandler} rows="4" />
                        </Form.Group>
                        <Form.Group controlId="formGridImage">
                            <Form.Control type="text" name="image" placeholder="Paste image url" onChange={changeHandler} required />
                        </Form.Group>
                        <div className='center'>
                            <button
                                className='button'
                                type='submit'
                            >
                                Send
                        </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUserById(state),
        posts: getPopstsById(state)
    }
};

const mapDispatchToProps = {
    fetchUserById,
    fetchPopsts
}

export default connect(mapStateToProps, mapDispatchToProps)(User);