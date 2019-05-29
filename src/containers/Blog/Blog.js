import React, { Component } from 'react';

import Posts from './Posts/Posts';

import classes from './Blog.module.css';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className={classes.Header}>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;