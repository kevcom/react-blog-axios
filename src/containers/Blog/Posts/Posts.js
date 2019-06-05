import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import FullPost from 'containers/Blog/FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {

        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').catch(error => {
        	console.log(error);
        });

        const postsSubset = posts.data.slice(0,4);

        const updatedPosts = postsSubset.map(post => {
            return {
                ...post,
                author: 'Kevin'
            }
        });

        this.setState({posts: updatedPosts });
    }

    postSelectedHandler = (id) => {
        //this.setState({ selectedPostId: id })
        this.props.history.push({
            pathname: `/post/${id}`
        });
    }

	render() {
        const posts = this.state.posts.map(post => {
	        return (
                // <Link
                //     key={post.id}
                //     to={`/post/${post.id}`}
                // >
                    <Post
        	            clicked={() => this.postSelectedHandler(post.id)}
        	            key={post.id}
        	            title={post.title}
        	            author={post.author}
	               />
                // </Link>
            )
        });

		return (
            <div>
    			<section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + 'post/:id'} exact component={FullPost} />
            </div>
		);
	}
}

export default Posts;           