import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from 'containers/Blog/NewPost/NewPost';

import classes from './Blog.module.css';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className={classes.Header}>
                    <nav className={classes.Nav}>
                        <ul>
                            <li>
                                <NavLink to="/" exact activeStyle={{color: 'orange'}}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}
                                    exact
                                    activeStyle={{
                                        color: 'orange'
                                    }}
                                >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;