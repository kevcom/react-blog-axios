import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';

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
                                <NavLink
                                    to="/"
                                    exact
                                    activeStyle={{color: 'orange'}}
                                >
                                    Posts
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
                <Switch> {/* only loads maximum of one route */}
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;